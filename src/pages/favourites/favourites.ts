import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ToastController } from 'ionic-angular';
import { RecipeDetailPage } from '../recipe-detail/recipe-detail';
import { BasePage } from '../BasePage';
import {User} from "../../models/user";

/**
 * Generated class for the FavouritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
})

export class FavouritesPage extends BasePage {

  TYPE_RECIPE = "recipe";
  TYPE_MENU = "menu";

  type = this.TYPE_RECIPE;

  userCurrent = User.currentUser;

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
    // for (let i = 0; i < 2; i++) {
    //   this.menus.push("aa");
    // }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavouritesPage');
  }

  segmentChanged(event) {

  }

  onRecipeDetail() {
    // go to recipe detail page
    this.navCtrl.push(RecipeDetailPage);
  }

}
