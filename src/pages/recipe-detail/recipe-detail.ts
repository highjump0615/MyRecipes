import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, MenuController, ToastController } from 'ionic-angular';
import { RecipeDetailMoreComponent } from '../../components/recipe-detail-more/recipe-detail-more';
import { Recipe } from '../../models/recipe';
import { BasePage } from '../BasePage';
import { ReviewListPage } from '../review-list/review-list';
import {SignupEmailPage} from "../signup/signup-email/signup-email";
import {TermsPage} from "../terms/terms";

/**
 * Generated class for the RecipeDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recipe-detail',
  templateUrl: 'recipe-detail.html',
})

export class RecipeDetailPage extends BasePage {

  static PARAM_RECIPE = 'recipe';

  recipe: Recipe;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public popoverCtrl: PopoverController,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController
  ) {
    super(navCtrl, menuCtrl, toastCtrl);

    this.recipe = navParams.get(RecipeDetailPage.PARAM_RECIPE);

    this.enableMenu(false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipeDetailPage');
  }

  presentPopover(event) {
    let popover = this.popoverCtrl.create(
      RecipeDetailMoreComponent,
      {},
      {
        cssClass: 'primary-popover'
      }
    );

    popover.present({
      ev: event
    });
  }

  onButReview() {
    // go to review list page
    var params = {};
    params[ReviewListPage.PARAM_RECIPEID] = this.recipe.id;

    this.navCtrl.push(ReviewListPage, params);
  }

}
