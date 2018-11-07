import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ShoppingList } from '../../models/shoppinglist';
import { Ingredient } from '../../models/ingredient';

/**
 * Generated class for the ShoppingListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})

export class ShoppingListPage {

  static PARAM_SHOPLIST = "shoplist"

  title = "Shopping List";

  ingredients: Array<String> = [];
  currentShopList: ShoppingList;

  sources: Array<Ingredient> = [];

  // add new ingredient
  showAddMenu = false;
  currentIngredientIndex = -1;
  currentIngredient: Ingredient;
  count = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {
    this.currentShopList = navParams.get(ShoppingListPage.PARAM_SHOPLIST);

    if (!this.currentShopList) {
      // new shopping list
      this.title = "New Shopping List";
    }

    // init data
    for (var i = 0; i < 2; i++) {
      this.ingredients.push("aa");
    }

    for (i = 0; i < 50; i++) {
      this.sources.push(new Ingredient());
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShoppingListPage');
  }

  onButClose() {
    this.viewCtrl.dismiss();
  }

  onButSave() {
    this.onButClose();
  }

  selectIngredient(index) {
    this.currentIngredientIndex = index;
    this.currentIngredient = this.sources[index];

    this.count = 1;
  }

  increaseCount(value) {
    // no ingredients selected
    if (!this.currentIngredient) {
      return;
    }

    this.count = Math.max(this.count + value, 1);
  }

  onButCountInc() {
    this.increaseCount(1);
  }

  onButCountDec() {
    this.increaseCount(-1);
  }

  onToggleAddMenu() {
    this.showAddMenu = !this.showAddMenu;
  }

}
