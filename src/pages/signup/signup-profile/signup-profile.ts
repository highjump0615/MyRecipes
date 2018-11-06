import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ToastController } from 'ionic-angular';

import { SignupFavouritePage } from '../signup-favourite/signup-favourite'
import { BaseLandingPage } from '../../BaseLandingPage';

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

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController
  ) {
    super(navCtrl, menuCtrl, toastCtrl);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupProfilePage');
  }

  /**
   * next button
   * @param event
   */
  onButNext(event) {
    // go to signup favourite page
    this.navCtrl.push(SignupFavouritePage);
  }

}
