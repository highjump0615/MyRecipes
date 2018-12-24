import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ToastController } from 'ionic-angular';
import { HomePage } from '../../home/home';
import { BasePage } from '../../BasePage';
import {User} from "../../../models/user";
import {Cuisine} from "../../../models/cuisine";
import {FirebaseManager} from "../../../helpers/firebase-manager";

/**
 * Generated class for the SignupDislikePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup-favourite',
  templateUrl: 'signup-dislike.html',
})
export class SignupDislikePage extends BasePage {

  userCurrent: User;
  dislikes: Array<Cuisine> = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController) {

    super(navCtrl, menuCtrl, toastCtrl);

    let that = this;

    // set current user
    this.userCurrent = User.currentUser;

    // fetch dislikes
    let dbRef = FirebaseManager.ref();

    let query = dbRef.child(Cuisine.TABLE_NAME_DISLIKE);
    query.once('value')
      .then((snapshot) => {
        console.log(snapshot);

        // clear
        const aryData = [];

        snapshot.forEach(function(child) {
          let c = new Cuisine(child);

          aryData.push(c);
        });

        this.dislikes = aryData;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupDislikePage');
  }

  /**
   * next button
   * @param event
   */
  onButNext(event) {
    let aryDislike = [];

    for (let cuisine of this.dislikes) {
      if (cuisine.selected) {
        aryDislike.push(cuisine.id);
      }
    }

    // save to db
    this.userCurrent.setDislikes(aryDislike);

    // go to main page
    this.gotoHome();
  }

}
