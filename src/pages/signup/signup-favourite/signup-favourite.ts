import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupAllergiesPage } from '../..';
import {FirebaseManager} from "../../../helpers/firebase-manager";
import {Cuisine} from "../../../models/cuisine";
import {User} from "../../../models/user";

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

  favourites: Array<Cuisine> = [];
  userCurrent: User;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    let that = this;

    // set current user
    this.userCurrent = User.currentUser;

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
  }

  ionViewDidLoad() {
  }

  /**
   * next button
   * @param event
   */
  onButNext(event) {
    let favourites = [];

    for (let cuisine of this.favourites) {
      if (cuisine.selected) {
        favourites.push(cuisine.id);
      }
    }

    // save to db
    this.userCurrent.setFavourites(favourites);

    // go to signup allergies page
    this.navCtrl.push(SignupAllergiesPage);
  }

}
