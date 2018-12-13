import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  MenuController,
  ToastController,
  AlertController,
  LoadingController, Loading
} from 'ionic-angular';

import { BaseLandingPage } from '../BaseLandingPage';
import { ForgetPage } from '../forget/forget'
import { SignupEmailPage } from '../signup/signup-email/signup-email'
import { TermsPage } from '../terms/terms';
import {Utils} from "../../helpers/utils";

import * as firebase from 'firebase/app';
import 'firebase/auth';

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
    public loadingCtrl: LoadingController
  ) {
    super(navCtrl, menuCtrl, toastCtrl);
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
    var params = {};
    params[TermsPage.PARAM_TYPE] = type;

    this.navCtrl.push(TermsPage, params);
  }

  /**
   * sign in button
   * @param event
   */
  onButSignin(event) {
    this.gotoHome();
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

    // show loading view
    let loadingView = this.loadingCtrl.create();
    loadingView.present();

    // do login
    firebase.auth().signInWithEmailAndPassword(
      this.email,
      this.password
    ).then( (res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);

      loadingView.dismiss();

      // show error alert
      let alert = this.alertCtrl.create({
        title: 'Login Failed',
        message: err.message,
        buttons: ['Ok']
      });
      alert.present();
    });
  }
}
