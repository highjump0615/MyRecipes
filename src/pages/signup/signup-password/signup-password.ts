import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupProfilePage } from '../signup-profile/signup-profile'
import {SignupEmailPage} from "../signup-email/signup-email";

/**
 * Generated class for the SignupPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup-password.html',
})
export class SignupPasswordPage {

  email = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.email = navParams.get(SignupEmailPage.PARAM_EMAIL);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPasswordPage');
  }

  /**
   * next button
   * @param event
   */
  onButNext(event) {
    // go to signup profile page
    this.navCtrl.push(SignupProfilePage);
  }

}
