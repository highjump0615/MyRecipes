import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Ingredient } from '../../models/ingredient';
import {FirebaseManager} from "../../helpers/firebase-manager";

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

  static PARAM_SHOPLIST = "shoplist";

  ingAll: Array<Ingredient> = [];

  // ingredient form
  ingName = '';
  ingUnit = '';
  ingQuantity: number;

  title = "Shopping List";

  ingShopping: Array<Ingredient> = [];

  // add new ingredient
  showAddMenu = false;
  selectedIndex = -1;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {
    // this.currentShopList = navParams.get(ShoppingListPage.PARAM_SHOPLIST);
    // if (!this.currentShopList) {
      // new shopping list
      this.title = "New Shopping List";
    // }

    //
    // fetch all ingredients
    //
    const dbRef = FirebaseManager.ref();

    const query = dbRef.child(Ingredient.TABLE_NAME);
    query.once('value')
      .then((snapshot) => {
        console.log(snapshot);

        // clear
        const aryIng = [];

        snapshot.forEach(function(child) {
          const i = new Ingredient(child);

          aryIng.push(i);
        });

        this.ingAll = aryIng;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShoppingListPage');
  }

  onButClose() {
    this.viewCtrl.dismiss();
  }

  onButSave() {
    // this.onButClose();
  }

  selectIngredient(index) {
    this.selectedIndex = index;

    if (index < 0) {
      // clear
      this.ingName = '';
      this.ingUnit = '';
      this.ingQuantity = null;
    } else {
      // update ingredient add form
      this.ingName = this.ingAll[index].name;
      this.ingUnit = this.ingAll[index].unit;

      if (!this.ingQuantity) {
        this.ingQuantity = 1;
      }
    }
  }

  increaseCount(value) {
    // no ingredients selected
    if (this.selectedIndex < 0) {
      return;
    }

    this.ingQuantity = Math.max(this.ingQuantity + value, 1);
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
