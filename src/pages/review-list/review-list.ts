import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Review } from '../../models/review';
import { WriteReviewPage } from '../write-review/write-review';
import {FirebaseManager} from "../../helpers/firebase-manager";
import {User} from "../../models/user";
import {Recipe} from "../../models/recipe";
import {RecipeDetailPage} from "../recipe-detail/recipe-detail";

/**
 * Generated class for the ReviewListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-review-list',
  templateUrl: 'review-list.html',
})
export class ReviewListPage {

  reviews: Array<Review> = [];
  recipe: Recipe;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.recipe = navParams.get(RecipeDetailPage.PARAM_RECIPE);

    // fetch reviews
    const dbRef = FirebaseManager.ref();
    const that = this;

    let nFetchCount = 0;
    let nFetchUserCount = 0;

    const query = dbRef.child(Review.TABLE_NAME)
      .child(this.recipe.id)
      .once('value')
      .then((snapshot) => {
        console.log(snapshot);

        // clear
        const aryReviews = [];

        snapshot.forEach(function(child) {
          const r = new Review(child);
          nFetchCount++;

          User.readFromDatabase(r.userId, (user) => {
            nFetchUserCount++;

            r.user = user;
            aryReviews.splice(0, 0, r);

            // update page
            if (nFetchCount === nFetchUserCount) {
              that.reviews = aryReviews;
            }
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewListPage');
  }

  onButNew() {
    var params = {};
    params[RecipeDetailPage.PARAM_RECIPE] = this.recipe;

    // go to write review page
    this.navCtrl.push(WriteReviewPage);
  }
}
