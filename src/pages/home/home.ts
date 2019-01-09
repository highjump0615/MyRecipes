import { Component } from '@angular/core';
import { NavController, MenuController, ToastController, ModalController } from 'ionic-angular';
import { BasePage } from '../BasePage';
import { RecipeDetailPage } from '../recipe-detail/recipe-detail';
import { MenuDetailPage } from '../menu-detail/menu-detail';
import { ShoppingListPage } from '../shopping-list/shopping-list';
import { SignupProfilePage } from '..';
import { CookingTipPage } from '../cooking-tip/cooking-tip';
import { FavouritesPage } from '../favourites/favourites';
import { MyRecipesPage } from '../my-recipes/my-recipes';
import { MenuGeneratorPage } from '../menu-generator/menu-generator';
import { ShoppingList } from '../../models/shoppinglist';
import { RecipeMenuPage } from '../recipe-menu/recipe-menu';
import { MenuDetail2Page } from '../menu-detail2/menu-detail2';
import { User } from '../../models/user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage extends BasePage {

  // user info
  userCurrent = User.currentUser;

  // recipes
  upcomings: Array<string> = [];
  recipes: Array<string> = [];

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController
  ) {

    super(navCtrl, menuCtrl, toastCtrl);

    // fetch menus

    // fetch shopping lists
    if (this.userCurrent.shoppingList.length <= 0) {
      this.userCurrent.fetchShoppingList();
    }
  }

  /**
   * view will appear
   */
  ionViewWillEnter() {
    // enable menu
    this.enableMenu(true);
  }

  ionViewDidLoad() {
  }

  onRecipeDetail() {
    // go to recipe detail page
    this.navCtrl.push(RecipeDetailPage);
  }

  onMenuDetail() {
    // go to menu detail page
    this.navCtrl.push(MenuDetail2Page);
  }

  onShoppingList() {
    var params = {};
    params[ShoppingListPage.PARAM_SHOPLIST] = new ShoppingList();

    // present shopping list page
    let shoppingListPage = this.modalCtrl.create(
      ShoppingListPage,
      params
    );
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

  onButViewAll() {
    // go to view all page
    this.navCtrl.push(RecipeMenuPage);
  }

  //
  // add buttons
  //
  onButAddShoppingList() {
    // present new shopping list page
    let shoppingListPage = this.modalCtrl.create(ShoppingListPage);
    shoppingListPage.present();
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
