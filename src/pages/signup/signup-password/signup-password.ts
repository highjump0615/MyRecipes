import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupProfilePage } from '../signup-profile/signup-profile'
import {SignupEmailPage} from "../signup-email/signup-email";
import {Utils} from "../../../helpers/utils";

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
  password = '';

  isAtleast6 = false;
  isUppercase = false;
  isLowercase = false;
  isNumber = false;

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
    if (!(this.isAtleast6 && this.isUppercase && this.isLowercase && this.isNumber)) {
      return;
    }

    let params = {};
    params[SignupEmailPage.PARAM_EMAIL] = this.email;
    params[SignupEmailPage.PARAM_PASSWORD] = this.password;

    // go to signup profile page
    this.navCtrl.push(SignupProfilePage, params);
  }

  onChangeText() {
    // clear all checkboxes
    this.isAtleast6 = false;
    this.isUppercase = false;
    this.isLowercase = false;
    this.isNumber = false;

    // check input validity
    if (this.password.length >=6) {
      this.isAtleast6 = true;
    }
    if (Utils.stringContainUppercase(this.password)) {
      this.isUppercase = true;
    }
    if (Utils.stringContainLowercase(this.password)) {
      this.isLowercase = true;
    }
    if (Utils.stringContainNumber(this.password)) {
      this.isNumber = true;
    }
  }


}
