import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ToastController } from 'ionic-angular';

import { BaseLandingPage } from '../BaseLandingPage';
import { ForgetPage } from '../forget/forget'
import { SignupEmailPage } from '../signup/signup-email/signup-email'
import { TermsPage } from '../terms/terms';

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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController) {

    super(navCtrl, menuCtrl, toastCtrl);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
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
}
