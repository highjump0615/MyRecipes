import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ToastController } from 'ionic-angular';
import { HomePage } from '../../home/home';
import { BasePage } from '../../BasePage';

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
export class SignupDislikePage extends BasePage {

  dislikes: Array<string> = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController) {

    super(navCtrl, menuCtrl, toastCtrl);

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
    this.gotoHome();
  }

}
