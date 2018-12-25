import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Cuisine} from "../../models/cuisine";
import {FirebaseManager} from "../../helpers/firebase-manager";

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

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {

    let that = this;

    // fetch cuisines
    let dbRef = FirebaseManager.ref();

    let query = dbRef.child(Cuisine.TABLE_NAME);
    query.once('value')
      .then((snapshot) => {
        console.log(snapshot);

        // clear
        const aryFavourite = [];

        snapshot.forEach(function(child) {
          let c = new Cuisine(child);

          aryFavourite.push(c);
        });

        this.favourites = aryFavourite;
      })
      .catch((err) => {
        console.log(err);
      });

    query = dbRef.child(Cuisine.TABLE_NAME_ALLERGY);
    query.once('value')
      .then((snapshot) => {
        console.log(snapshot);

        // clear
        const aryAllergy = [];
        const aryDiet = [];

        snapshot.forEach(function(child) {
          let allergy = new Cuisine(child);
          aryAllergy.push(allergy);

          let diet = new Cuisine(child);
          aryDiet.push(diet);
        });

        this.allergies = aryAllergy;
        this.diets = aryDiet;
      })
      .catch((err) => {
        console.log(err);
      });

    query = dbRef.child(Cuisine.TABLE_NAME_DISLIKE);
    query.once('value')
      .then((snapshot) => {
        console.log(snapshot);

        // clear
        const aryDislike = [];

        snapshot.forEach(function(child) {
          let c = new Cuisine(child);

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

}
