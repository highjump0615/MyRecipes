import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  ROW_NUM = 4;

  images: Array<string> = [];
  grid: Array<Array<string>> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // init data
    for (var i = 0; i < 23; i++) {
      this.images.push("aa");
    }
  }

  ionViewDidLoad() {
    for (let i = 0; i < this.images.length; i++) { //iterate images
      if (i % this.ROW_NUM == 0) {
        this.grid.push([]);
      }

      let rowNum = this.grid.length - 1;
      this.grid[rowNum].push(this.images[i]);
    }
  }

}
