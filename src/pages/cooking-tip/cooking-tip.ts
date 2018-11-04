import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CookingTipPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cooking-tip',
  templateUrl: 'cooking-tip.html',
})

export class CookingTipPage {

  tips: Array<String> = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    // init data
    for (var i = 0; i < 10; i++) {
      this.tips.push("aa");
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CookingTipPage');
  }

}
