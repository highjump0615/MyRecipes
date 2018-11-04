import { Component } from '@angular/core';
import { NavController, MenuController, ToastController } from 'ionic-angular';
import { BasePage } from '../BasePage';
import { RecipeDetailPage } from '../recipe-detail/recipe-detail';
import { MenuDetailPage } from '../menu-detail/menu-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage extends BasePage {

  // user info
  username = "Kristina Maloine";
  desc = "Food Blogger, Explorer, Designer, Entrepreneur, Food photographer";

  // recipes
  upcomings: Array<string> = [];
  recipes: Array<string> = [];

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController) {

    super(navCtrl, menuCtrl, toastCtrl);

    // enable menu
    this.enableMenu(true);

    // init data
    for (var i = 0; i < 3; i++) {
      this.upcomings.push("aa");
      this.recipes.push("aa");
    }
  }

  onRecipeDetail() {
    // go to recipe detail page
    this.navCtrl.push(RecipeDetailPage);
  }

  onMenuDetail() {
    // go to menu detail page
    this.navCtrl.push(MenuDetailPage);
  }

}
