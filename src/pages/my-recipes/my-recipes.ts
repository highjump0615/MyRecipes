import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ToastController } from 'ionic-angular';
import { RecipeDetailPage } from '../recipe-detail/recipe-detail';
import { BasePage } from '../BasePage';
import { AddRecipePage } from '../add-recipe/add-recipe';

/**
 * Generated class for the MyRecipesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-recipes',
  templateUrl: 'my-recipes.html',
})
export class MyRecipesPage extends BasePage {

  recipes: Array<string> = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController
  ) {
    super(navCtrl, menuCtrl, toastCtrl);

    // disable menu
    this.enableMenu(false);

    // init data
    for (var i = 0; i < 6; i++) {
      this.recipes.push("aa");
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyRecipesPage');
  }

  onRecipeDetail() {
    // go to recipe detail page
    this.navCtrl.push(RecipeDetailPage);
  }

  onButNew() {
    // go to add recipe page
    this.navCtrl.push(AddRecipePage);
  }

}
