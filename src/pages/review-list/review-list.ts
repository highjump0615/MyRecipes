import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Review } from '../../models/review';
import { WriteReviewPage } from '../write-review/write-review';

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

  static PARAM_RECIPEID = "recipeId";

  reviews: Array<Review> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    // init data
    for (var i = 0; i < 2; i++) {
      this.reviews.push(new Review());
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewListPage');
  }

  onButNew() {
    // go to write review page
    this.navCtrl.push(WriteReviewPage);
  }
}
