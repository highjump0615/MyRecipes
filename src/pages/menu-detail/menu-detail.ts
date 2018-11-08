import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Recipe } from '../../models/recipe';
import { RecipeDetailPage } from '../recipe-detail/recipe-detail';
import { ShoppingListPage } from '../shopping-list/shopping-list';
import { ShoppingList } from '../../models/shoppinglist';
import { AddRecipePage } from '../add-recipe/add-recipe';

/**
 * Generated class for the MenuDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-detail',
  templateUrl: 'menu-detail.html',
})

export class MenuDetailPage {

  recipes: Array<Recipe> = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController
  ) {
    // init data
    for (var i = 0; i < 5; i++) {
      this.recipes.push(new Recipe());
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuDetailPage');
  }

  onRecipeDetail(data) {
    // go to recipe detail page
    this.navCtrl.push(RecipeDetailPage);
  }

  onButAddRecipe() {
    // go to add recipe page
    this.navCtrl.push(AddRecipePage);
  }

  onButShoppingList() {
    // go to shopping list page
    var params = {};
    params[ShoppingListPage.PARAM_SHOPLIST] = new ShoppingList();

    // present shopping list page
    let shoppingListPage = this.modalCtrl.create(
      ShoppingListPage,
      params
    );
    shoppingListPage.present();
  }
}
