import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import { CheckBoxComponent } from '../../../components/check-box/check-box'
import { SignupPasswordPage } from '../signup-password/signup-password'
import {Utils} from "../../../helpers/utils";

import {FirebaseManager} from "../../../helpers/firebase-manager";
import {User} from "../../../models/user";
import {TermsPage} from "../../terms/terms";

/**
 * Generated class for the SignupEmailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup-email.html',
})

export class SignupEmailPage {

  email = '';

  isEmailValid = false;
  isNotUse = false;

  static PARAM_EMAIL = 'email';
  static PARAM_PASSWORD = 'password';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupEmailPage');
  }

  /**
   * next button
   * @param event
   */
  onButNext(event) {
    if (!this.isEmailValid || !this.isNotUse) {
      return;
    }

    // go to signup password page
    let params = {};
    params[SignupEmailPage.PARAM_EMAIL] = this.email;

    this.navCtrl.push(SignupPasswordPage, params);
  }

  onChangeText() {
    // disable checkboxes
    this.isEmailValid = false;
    this.isNotUse = false;

    if (Utils.isEmailValid(this.email)) {
      this.isEmailValid = true;

      // check if email has been used
      let database = FirebaseManager.ref();
      let query = database.child(User.TABLE_NAME);
      query.orderByChild(User.FIELD_EMAIL)
        .equalTo(this.email)
        .once('value')
        .then((snapshot) => {
          if (!snapshot.exists()) {
            this.isNotUse = true;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
}
