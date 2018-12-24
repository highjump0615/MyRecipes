import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { SignupDislikePage } from '../signup-dislike/signup-dislike';
import {Cuisine} from "../../../models/cuisine";
import {User} from "../../../models/user";
import {FirebaseManager} from "../../../helpers/firebase-manager";

/**
 * Generated class for the SignupAllergiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup-favourite',
  templateUrl: 'signup-allergies.html',
})

export class SignupAllergiesPage {

  /**
   * current accordion item
   * 0: Allergies
   * 1: Diets
   *
   * @memberof SignupAllergiesPage
   */
  currentItem = 0;

  userCurrent: User;
  allergies: Array<Cuisine> = [];
  diets: Array<Cuisine> = [];

  @ViewChild('accordionContent') accordContent: ElementRef;

  heightAccord = 0;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    let that = this;

    // set current user
    this.userCurrent = User.currentUser;

    //
    // fetch allergies
    //
    let dbRef = FirebaseManager.ref();

    let query = dbRef.child(Cuisine.TABLE_NAME_ALLERGY);
    query.once('value')
      .then((snapshot) => {
        console.log(snapshot);

        // clear
        const aryAllergies = [];
        const aryDiets = [];

        snapshot.forEach(function(child) {
          aryAllergies.push(new Cuisine(child));
          aryDiets.push(new Cuisine(child));
        });

        this.allergies = aryAllergies;
        this.diets = aryDiets;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupAllergiesPage');

    console.log(this.accordContent.nativeElement.offsetHeight);
  }

  /**
   * allergy accordion button
   * @param event
   */
  onButAccordion(index) {
    this.currentItem = index;
  }

  /**
   * next button
   * @param event
   */
  onButNext(event) {
    //
    // allergies
    //
    let allergiesSelected = [];
    for (let item of this.allergies) {
      if (item.selected) {
        allergiesSelected.push(item.id);
      }
    }

    // save to db
    this.userCurrent.setAllergies(allergiesSelected);

    //
    // diets
    //
    let dietsSelected = [];
    for (let item of this.diets) {
      if (item.selected) {
        dietsSelected.push(item.id);
      }
    }

    // save to db
    this.userCurrent.setDiets(dietsSelected);

    // go to signup dislike page
    this.navCtrl.push(SignupDislikePage);
  }

}
