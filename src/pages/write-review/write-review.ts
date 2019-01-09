import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BaseTextPage } from '../BaseTextPage';
import {StarRateComponent} from "../../components/star-rate/star-rate";
import {Review} from "../../models/review";
import {RecipeDetailPage} from "../recipe-detail/recipe-detail";
import {Recipe} from "../../models/recipe";

/**
 * Generated class for the WriteReviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-write-review',
  templateUrl: 'write-review.html',
})
export class WriteReviewPage extends BaseTextPage {

  title = '';
  content = '';

  @ViewChild('starRate') starRate: StarRateComponent;

  recipe: Recipe;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    super(navCtrl);

    this.recipe = navParams.get(RecipeDetailPage.PARAM_RECIPE);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WriteReviewPage');
  }

  onButSubmit() {
    // add new review
    const reviewNew = new Review();

    reviewNew.title = this.title;
    reviewNew.content = this.content;
    reviewNew.rate = this.starRate.rating;

    reviewNew.saveToDatabase(null, this.recipe.id);

    // update recipe's rate
    this.recipe.rateCount++;
    this.recipe.rate += this.starRate.rating;
    this.recipe.saveToDatabaseWithField(Recipe.FIELD_RATECOUNT, this.recipe.rateCount);
    this.recipe.saveToDatabaseWithField(Recipe.FIELD_RATE, this.recipe.rate);

    this.navCtrl.pop();
  }
}
