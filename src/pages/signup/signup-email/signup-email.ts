import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CheckBoxComponent } from '../../../components/check-box/check-box'
import { SignupPasswordPage } from '../signup-password/signup-password'

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupEmailPage');
  }

  /**
   * next button
   * @param event
   */
  onButNext(event) {
    // go to signup password page
    this.navCtrl.push(SignupPasswordPage);
  }
}
