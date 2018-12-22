import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  MenuController,
  ToastController,
  AlertController,
  LoadingController, Loading, Platform
} from 'ionic-angular';

import { BaseLandingPage } from '../BaseLandingPage';
import { ForgetPage } from '../forget/forget'
import { SignupEmailPage } from '../signup/signup-email/signup-email'
import { TermsPage } from '../terms/terms';
import {Utils} from "../../helpers/utils";

import {FirebaseManager} from "../../helpers/firebase-manager";
import {environment} from "../../environments/environments";
import * as firebase from "firebase";
import {User} from "../../models/user";
import {SignupProfilePage} from "../signup/signup-profile/signup-profile";
import {HomePage} from "../home/home";
import {GooglePlus} from "@ionic-native/google-plus";

/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})

export class SigninPage extends BaseLandingPage {

  email = '';
  password = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private platform: Platform,
    private googlePlus: GooglePlus
  ) {
    super(navCtrl, menuCtrl, toastCtrl, loadingCtrl);
  }

  ionViewDidLoad() {
  }

  /**
   * sign up
   * @param event
   */
  onButSignup(event) {
    // go to sign up page
    this.navCtrl.push(SignupEmailPage);
  }

  /**
   * privacy policy button
   * @param event
   */
  onButPolicy(event) {
    // go to terms page
    this.gotoTermPage(TermsPage.TYPE_POLICY);
  }

  /**
   * terms of services button
   * @param event
   */
  onButTerm(event) {
    // go to terms page
    this.gotoTermPage(TermsPage.TYPE_TERMS);
  }

  gotoTermPage(type) {
    const params = {};
    params[TermsPage.PARAM_TYPE] = type;

    this.navCtrl.push(TermsPage, params);
  }

  /**
   * forget button
   * @param event
   */
  onButForget(event) {
    // go to reset password page
    this.navCtrl.push(ForgetPage);
  }

  signinForm() {
    //
    // check input validity
    //
    if (!this.email) {
      let alert = this.alertCtrl.create({
        title: 'Email Invalid',
        message: 'Please enter your email',
        buttons: ['Ok']
      });
      alert.present();

      return;
    }

    if (!this.password) {
      let alert = this.alertCtrl.create({
        title: 'Password Invalid',
        message: 'Please enter your password',
        buttons: ['Ok']
      });
      alert.present();

      return;
    }

    if (!Utils.isEmailValid(this.email)) {
      let alert = this.alertCtrl.create({
        title: 'Email Invalid',
        message: 'Please enter valid email address',
        buttons: ['Ok']
      });
      alert.present();

      return;
    }

    this.showLoadingView();

    // do login
    FirebaseManager.auth().signInWithEmailAndPassword(
      this.email,
      this.password
    ).then( (res) => {
      console.log(res);

      this.showLoadingView(false);

      if (!res.user) {
        return;
      }

      // go to home page
      this.gotoHome();
    }).catch((err) => {
      console.log(err);

      this.showLoadingView(false);

      // show error alert
      let alert = this.alertCtrl.create({
        title: 'Login Failed',
        message: err.message,
        buttons: ['Ok']
      });
      alert.present();
    });
  }

  onButGoogle() {
    const that = this;

    this.showLoadingView();

    // browser
    if (Utils.isPlatformWeb(this.platform)) {
      const provider = new firebase.auth.GoogleAuthProvider();

      FirebaseManager.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // var token = result.credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        const profile = result.additionalUserInfo.profile;

        console.log(profile);

        that.continueGoogleSignIn(
          result.credential,
          profile['family_name'],
          profile['given_name'],
          profile['picture']);
      }).catch(function(error) {
        that.onError(error);
      });
    }
    // native app
    else {
      this.googlePlus.login({
        'webClientId': environment.webClientId,
        'offline': true
      }).then((res) => {
        console.log(JSON.stringify(res));

        const googleCredential = firebase.auth.GoogleAuthProvider.credential(res['idToken']);

        that.continueGoogleSignIn(
          googleCredential,
          res['familyName'],
          res['givenName'],
          res['imageUrl']);

      }).catch((err) => {
        that.onError(err);
      });
    }
  }

  onError(err) {
    console.log(err);

    this.showLoadingView(false);

    // show error alert
    let alert = this.alertCtrl.create({
      title: 'Google Signin Failed',
      message: err.message,
      buttons: ['Ok']
    });
    alert.present();
  }

  continueGoogleSignIn(credential, firstName, lastName, photoUrl) {
    const that = this;

    FirebaseManager.auth().signInAndRetrieveDataWithCredential(credential)
      .then((res) => {
        this.fetchUserInfo(
          res.user,
          firstName,
          lastName,
          photoUrl,
          () => {
            that.showLoadingView(false);
            FirebaseManager.signOut();
          })
      })
      .catch((err) => {
        this.onError(err);
      })
  }

  fetchUserInfo(userInfo: firebase.User,
                firstName: string,
                lastName: string,
                photoURL: string,
                onFailed?: () => void,
                onComplete?: () => void) {

    const userId = FirebaseManager.auth().currentUser.uid;
    if (!userId) {
      if (onFailed) {
        onFailed();
      }
    }

    User.readFromDatabase(userId, (u) => {
      User.currentUser = u;

      this.showLoadingView(false);

      if (!User.currentUser) {
        // get user info, from facebook account info
        if (userInfo) {
          let newUser = new User(userId);

          newUser.email = userInfo.email;
          newUser.firstName = firstName;
          newUser.lastName = lastName;
          newUser.photoUrl = photoURL;

          User.currentUser = newUser;
        }

        // social login, go to signup profile page
        this.navCtrl.setRoot(
          SignupProfilePage,
          {},
          {animate: true, direction: 'forward'}
        );
      }
      else {
        this.gotoHome();
      }

      if (onComplete) {
        onComplete();
      }
    });
  }
}
