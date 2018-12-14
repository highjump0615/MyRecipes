import { Component, ViewChild, ElementRef } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  MenuController,
  ToastController,
  AlertController,
  LoadingController
} from 'ionic-angular';

import { SignupFavouritePage } from '../signup-favourite/signup-favourite'
import { BaseLandingPage } from '../../BaseLandingPage';
import { User } from '../../../models/user';
import {FirebaseManager} from "../../../helpers/firebase-manager";
import {SignupEmailPage} from "../signup-email/signup-email";

/**
 * Generated class for the SignupProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup-profile',
  templateUrl: 'signup-profile.html',
})
export class SignupProfilePage extends BaseLandingPage {

  email = '';
  password = '';

  loadingView: any;

  firstName = '';
  lastName = '';
  description = '';

  @ViewChild('desc') textDesc: ElementRef;

  title = "Sign Up";

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public navParams: NavParams
  ) {
    super(navCtrl, menuCtrl, toastCtrl);

    this.email = navParams.get(SignupEmailPage.PARAM_EMAIL);
    this.password = navParams.get(SignupEmailPage.PARAM_PASSWORD);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupProfilePage');

    // check signup or edit profile
    if (User.currentUser) {
      this.title = "Edit Profile";
    }
  }

  adjustTextarea(event: any): void {
    let textarea: any		= event.target;
    textarea.style.overflow = 'hidden';
    textarea.style.height 	= 'auto';
    textarea.style.height 	= textarea.scrollHeight + 'px';
    return;
  }

  /**
   * next button
   * @param event
   */
  onButNext(event) {
    //
    // check validation
    //
    if (!this.firstName) {
      let alert = this.alertCtrl.create({
        title: 'First Name Invalid',
        message: 'First name cannot be empty',
        buttons: ['Ok']
      });
      alert.present();

      return;
    }

    if (!this.lastName) {
      let alert = this.alertCtrl.create({
        title: 'Last Name Invalid',
        message: 'Last name cannot be empty',
        buttons: ['Ok']
      });
      alert.present();

      return;
    }

    // show loading view
    this.loadingView = this.loadingCtrl.create();
    this.loadingView.present();

    // do signup
    FirebaseManager.auth().createUserWithEmailAndPassword(
      this.email,
      this.password
    ).then((res) => {
      console.log(res);

      let u = res.user;

      if (!u) {
        return;
      }

      // set user
      let userNew = new User(u.uid);

      // save user info
      userNew.email = this.email;

      User.currentUser = userNew;

      this.saveUserInfo();

    }).catch((err) => {
      console.log(err);

      this.loadingView.dismiss();

      // show error alert
      let alert = this.alertCtrl.create({
        title: 'Signup Failed',
        message: err.message,
        buttons: ['Ok']
      });
      alert.present();
    });
  }

  saveUserInfo() {
    let user = User.currentUser;

    // save info
    user.firstName = this.firstName;
    user.lastName = this.lastName;

    user.saveToDatabase();

    // hide loading view
    this.loadingView.dismiss();

    // go to signup favourite page
    this.navCtrl.push(SignupFavouritePage);
  }

}
