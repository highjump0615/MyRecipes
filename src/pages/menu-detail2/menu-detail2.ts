import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Recipe } from '../../models/recipe';
import { RecipeDetailPage } from '../recipe-detail/recipe-detail';
import { AddRecipePage } from '../add-recipe/add-recipe';

/**
 * Generated class for the MenuDetail2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-detail2',
  templateUrl: 'menu-detail2.html',
})
export class MenuDetail2Page {

  recipes: Array<Recipe> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // init data
    for (var i = 0; i < 5; i++) {
      this.recipes.push(new Recipe());
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuDetail2Page');
  }

  onRecipeDetail(data) {
    // go to recipe detail page
    this.navCtrl.push(RecipeDetailPage);
  }

  onButAdd() {
    // go to add recipe page
    this.navCtrl.push(AddRecipePage);
  }

}
