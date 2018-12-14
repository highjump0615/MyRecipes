import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ToastController } from 'ionic-angular';

import { SignupFavouritePage } from '../signup-favourite/signup-favourite'
import { BaseLandingPage } from '../../BaseLandingPage';
import { User } from '../../../models/user';

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

  @ViewChild('desc') textDesc: ElementRef;

  title = "Sign Up";

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController
  ) {
    super(navCtrl, menuCtrl, toastCtrl);
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
    // go to signup favourite page
    this.navCtrl.push(SignupFavouritePage);
  }

}
