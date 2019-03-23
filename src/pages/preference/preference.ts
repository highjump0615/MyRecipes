import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Cuisine} from "../../models/cuisine";
import {FirebaseManager} from "../../helpers/firebase-manager";
import {User} from "../../models/user";
import {BaseCuisinePage} from "../base-cuisine";

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

export class PreferencePage extends BaseCuisinePage {

  // menu state
  isFavouriteOpen = true;
  isAllergyOpen = false;
  isDietOpen = false;
  isDislikeOpen = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    super(true);

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

  onSelectItem(param) {
    console.log(param);

    let userCurrent = User.currentUser;

    switch (param.index) {
      case this.CUISINE_FAVOURITE:
        userCurrent.addFavouriteCuisine(param.cuisine);
        break;

      case this.CUISINE_ALLERGY:
        userCurrent.addAllergy(param.cuisine);
        break;

      case this.CUISINE_DIET:
        userCurrent.addDiet(param.cuisine);
        break;

      case this.CUISINE_DISLIKE:
        userCurrent.addDislike(param.cuisine);
        break;
    }
  }
}
