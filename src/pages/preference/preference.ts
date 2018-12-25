import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Cuisine} from "../../models/cuisine";
import {FirebaseManager} from "../../helpers/firebase-manager";
import {User} from "../../models/user";

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
  favourites: Array<Cuisine> = [];
  allergies: Array<Cuisine> = [];
  diets: Array<Cuisine> = [];
  dislikes: Array<Cuisine> = [];

  // index for cuisine items
  CUISINE_FAVOURITE = 0;
  CUISINE_ALLERGY = 1;
  CUISINE_DIET = 2;
  CUISINE_DISLIKE = 3;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {

    let that = this;

    //
    // fetch cuisines
    //
    let dbRef = FirebaseManager.ref();
    let userCurrent = User.currentUser;

    //
    // fetch favourites
    //
    let query = dbRef.child(Cuisine.TABLE_NAME);
    query.once('value')
      .then((snapshot) => {
        console.log(snapshot);

        // clear
        const aryFavourite = [];

        snapshot.forEach(function(child) {
          let c = new Cuisine(child);
          for (const cId of userCurrent.favouriteCuisines) {
            if (c.id == cId) {
              c.selected = true;
            }
          }

          aryFavourite.push(c);
        });

        this.favourites = aryFavourite;
      })
      .catch((err) => {
        console.log(err);
      });

    //
    // fetch allergies & diets
    //
    query = dbRef.child(Cuisine.TABLE_NAME_ALLERGY);
    query.once('value')
      .then((snapshot) => {
        console.log(snapshot);

        // clear
        const aryAllergy = [];
        const aryDiet = [];

        snapshot.forEach(function(child) {
          let allergy = new Cuisine(child);
          for (const cId of userCurrent.allergies) {
            if (allergy.id == cId) {
              allergy.selected = true;
            }
          }
          aryAllergy.push(allergy);

          let diet = new Cuisine(child);
          for (const cId of userCurrent.diets) {
            if (diet.id == cId) {
              diet.selected = true;
            }
          }
          aryDiet.push(diet);
        });

        this.allergies = aryAllergy;
        this.diets = aryDiet;
      })
      .catch((err) => {
        console.log(err);
      });

    //
    // fetch dislikes
    //
    query = dbRef.child(Cuisine.TABLE_NAME_DISLIKE);
    query.once('value')
      .then((snapshot) => {
        console.log(snapshot);

        // clear
        const aryDislike = [];

        snapshot.forEach(function(child) {
          let c = new Cuisine(child);
          for (const cId of userCurrent.favouriteCuisines) {
            if (c.id == cId) {
              c.selected = true;
            }
          }

          aryDislike.push(c);
        });

        this.dislikes = aryDislike;
      })
      .catch((err) => {
        console.log(err);
      });
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
