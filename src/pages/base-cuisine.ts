import {Cuisine} from "../models/cuisine";
import {FirebaseManager} from "../helpers/firebase-manager";
import {User} from "../models/user";
import {BasePage} from "./BasePage";
import {MenuController, NavController, NavParams, ToastController} from "ionic-angular";

export class BaseCuisinePage extends BasePage {

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

  constructor(
    needSelect: boolean,
    public navCtrl?: NavController,
    public menuCtrl?: MenuController,
    public toastCtrl?: ToastController
  ) {
    super(navCtrl, menuCtrl, toastCtrl);

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
          if (needSelect) {
            for (const cId of userCurrent.favouriteCuisines) {
              if (c.id == cId) {
                c.selected = true;
              }
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
          if (needSelect) {
            for (const cId of userCurrent.allergies) {
              if (allergy.id == cId) {
                allergy.selected = true;
              }
            }
          }
          aryAllergy.push(allergy);

          let diet = new Cuisine(child);
          if (needSelect) {
            for (const cId of userCurrent.diets) {
              if (diet.id == cId) {
                diet.selected = true;
              }
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
          if (needSelect) {
            for (const cId of userCurrent.favouriteCuisines) {
              if (c.id == cId) {
                c.selected = true;
              }
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
}
