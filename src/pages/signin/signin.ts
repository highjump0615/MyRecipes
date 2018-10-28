import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

import { BaseLandingPage } from '../BaseLandingPage';
import { ForgetPage } from '../forget/forget'

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
    super(menuCtrl);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }

  /**
   * sign up
   * @param event
   */
  onButSignup(event) {
    console.log(event);
  }

  /**
   * privacy policy button
   * @param event
   */
  onButPolicy(event) {
    console.log(event);
  }

  /**
   * terms of services button
   * @param event
   */
  onButTerm(event) {
    console.log(event);
  }

  /**
   * sign in button
   * @param event
   */
  onButSignin(event) {
    console.log(event);
  }

  /**
   * forget button
   * @param event
   */
  onButForget(event) {
    this.navCtrl.push(ForgetPage);
  }
}
