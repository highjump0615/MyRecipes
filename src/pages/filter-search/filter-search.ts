import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Ingredient } from '../../models/ingredient';

/**
 * Generated class for the FilterSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filter-search',
  templateUrl: 'filter-search.html',
})
export class FilterSearchPage {

  /**
   * options
   *
   * @memberof FilterSearchPage
   */
  OPT_ALL = "all";
  OPT_PRESET = "preset";

  option = this.OPT_ALL;

  /**
   * segments
   *
   * @memberof FilterSearchPage
   */
  TYPE_INGREDIENT = "ingredient";
  TYPE_COOK = "cook";
  TYPE_TIME = "time";

  type = this.TYPE_INGREDIENT;

  /**
   * ingredient accordion
   * 0: Favourite
   * 1: Allergies
   * 2: Dietary
   * 3: Dislikes
   *
   * @memberof FilterSearchPage
   */
  ingAccIndex = 0;

  favourites: Array<Ingredient> = [];
  allergies: Array<Ingredient> = [];
  diets: Array<Ingredient> = [];
  dislikes: Array<Ingredient> = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {
    // init data
    for (var i = 0; i < 7; i++) {
      this.favourites.push(new Ingredient());
      this.allergies.push(new Ingredient());
      this.diets.push(new Ingredient());
      this.dislikes.push(new Ingredient());
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterSearchPage');
  }

  onButDone() {
    // close
    this.onButClose();
  }

  onButOption(value) {
    this.option = value;
  }

  onButAccordion(index) {
    this.ingAccIndex = index;
  }

  onButIngredient(data) {
    data.selected = !data.selected;
  }

  onButClose() {
    this.viewCtrl.dismiss();
  }
}
