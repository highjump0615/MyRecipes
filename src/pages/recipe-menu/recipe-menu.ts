import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ToastController } from 'ionic-angular';
import { BasePage } from '../BasePage';
import { RecipeDetailPage } from '../recipe-detail/recipe-detail';

/**
 * Generated class for the RecipeMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recipe-menu',
  templateUrl: 'recipe-menu.html',
})
export class RecipeMenuPage extends BasePage {

  TYPE_RECIPE = "recipe";
  TYPE_MENU = "menu";

  type = this.TYPE_RECIPE;

  recipes: Array<string> = [];
  menus: Array<string> = [];

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

    for (i = 0; i < 2; i++) {
      this.menus.push("aa");
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipeMenuPage');
  }

  onRecipeDetail() {
    // go to recipe detail page
    this.navCtrl.push(RecipeDetailPage);
  }

}
