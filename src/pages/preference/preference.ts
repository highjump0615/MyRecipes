import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PreferencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-preference',
  templateUrl: 'preference.html',
})

export class PreferencePage {

  // menu state
  isFavouriteOpen = true;
  isAllergyOpen = false;
  isDietOpen = false;
  isDislikeOpen = false;

  // recipes
  favourites: Array<string> = [];
  allergies: Array<string> = [];
  diets: Array<string> = [];
  dislikes: Array<string> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    // init data
    for (var i = 0; i < 10; i++) {
      this.favourites.push("aa");
      this.allergies.push("aa");
      this.diets.push("aa");
      this.dislikes.push("aa");
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreferencePage');
  }

  onButFavourite() {
    this.isFavouriteOpen = !this.isFavouriteOpen;
  }

  onButAllergy() {
    this.isAllergyOpen = !this.isAllergyOpen;
  }

  onButDiet() {
    this.isDietOpen = !this.isDietOpen;
  }

  onButDislike() {
    this.isDislikeOpen = !this.isDislikeOpen;
  }

}
