import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Recipe } from '../../models/recipe';
import { RecipeDetailPage } from '../recipe-detail/recipe-detail';

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
    public navParams: NavParams
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
}
