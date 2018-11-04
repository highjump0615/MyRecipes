import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FavouritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
})

export class FavouritesPage {

  TYPE_RECIPE = "recipe";
  TYPE_MENU = "menu";

  type = this.TYPE_RECIPE;

  recipes: Array<string> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // init data
    for (var i = 0; i < 6; i++) {
      this.recipes.push("aa");
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavouritesPage');
  }

  segmentChanged(event) {

  }

}
