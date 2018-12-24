import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupAllergiesPage } from '../..';

/**
 * Generated class for the SignupFavouritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup-favourite',
  templateUrl: 'signup-favourite.html',
})

export class SignupFavouritePage {

  images: Array<string> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // init data
    for (var i = 0; i < 23; i++) {
      this.images.push("aa");
    }
  }

  ionViewDidLoad() {
  }

  /**
   * next button
   * @param event
   */
  onButNext(event) {
    // go to signup password page
    this.navCtrl.push(SignupAllergiesPage);
  }

}
