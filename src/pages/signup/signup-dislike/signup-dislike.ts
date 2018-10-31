import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SignupDislikePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup-favourite',
  templateUrl: 'signup-dislike.html',
})
export class SignupDislikePage {

  dislikes: Array<string> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // init data
    for (var i = 0; i < 15; i++) {
      this.dislikes.push("aa");
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupDislikePage');
  }

  /**
   * next button
   * @param event
   */
  onButNext(event) {
    // go to main page
    // this.navCtrl.push(SignupDislikePage);
  }

}
