import { Component } from '@angular/core';
import { NavController, MenuController, ToastController, ModalController } from 'ionic-angular';
import { BasePage } from '../BasePage';
import { RecipeDetailPage } from '../recipe-detail/recipe-detail';
import { MenuDetailPage } from '../menu-detail/menu-detail';
import { ShoppingListPage } from '../shopping-list/shopping-list';
import { SignupProfilePage } from '../signup/signup-profile/signup-profile';
import { CookingTipPage } from '../cooking-tip/cooking-tip';
import { FavouritesPage } from '../favourites/favourites';
import { MyRecipesPage } from '../my-recipes/my-recipes';
import { MenuGeneratorPage } from '../menu-generator/menu-generator';

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
    public toastCtrl: ToastController,
    public modalCtrl: ModalController) {

    super(navCtrl, menuCtrl, toastCtrl);

    // init data
    for (var i = 0; i < 3; i++) {
      this.upcomings.push("aa");
      this.recipes.push("aa");
    }
  }

  /**
   * view will appear
   */
  ionViewWillEnter() {
    // enable menu
    this.enableMenu(true);
  }

  onRecipeDetail() {
    // go to recipe detail page
    this.navCtrl.push(RecipeDetailPage);
  }

  onMenuDetail() {
    // go to menu detail page
    this.navCtrl.push(MenuDetailPage);
  }

  onShoppingList() {
    // present shopping list page
    let shoppingListPage = this.modalCtrl.create(ShoppingListPage, {});
    shoppingListPage.present();
  }

  onButEditProfile() {
    // go to edit profile page
    this.navCtrl.push(SignupProfilePage);
  }

  onButCookTip() {
    // go to cooking tips page
    this.navCtrl.push(CookingTipPage);
  }

  onButFavourites() {
    // go to favourites page
    this.navCtrl.push(FavouritesPage);
  }

  //
  // add buttons
  //
  onButAddShoppingList() {
  }

  onButMyRecipes() {
    // go to my recipes page
    this.navCtrl.push(MyRecipesPage);
  }

  onButAddMenu() {
    // go to menu generator page
    this.navCtrl.push(MenuGeneratorPage);
  }
}
