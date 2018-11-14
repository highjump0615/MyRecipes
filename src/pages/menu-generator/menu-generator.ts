import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ToastController, ModalController } from 'ionic-angular';
import { BasePage } from '../BasePage';
import { RecipeDetailPage } from '../recipe-detail/recipe-detail';
import { AddDatePage } from '../add-date/add-date';

/**
 * Generated class for the MenuGeneratorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-generator',
  templateUrl: 'menu-generator.html',
})
export class MenuGeneratorPage extends BasePage {

  TYPE_AUTO = "auto";
  TYPE_MANUAL = "manual";

  type = this.TYPE_AUTO;

  filterOn = false;

  // filter values
  usePreset = false;

  /**
   * 0: Favourite
   * 1: Allergies
   * 2: Dietary
   * 3: Dislikes
   *
   * @memberof MenuGeneratorPage
   */
  filterAccIndex = 0;

  // recipes
  favourites: Array<string> = [];
  allergies: Array<string> = [];
  diets: Array<string> = [];
  dislikes: Array<string> = [];

  added: Array<string> = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController
  ) {
    super(navCtrl, menuCtrl, toastCtrl);

    // init data
    for (var i = 0; i < 10; i++) {
      this.favourites.push("aa");
      this.allergies.push("aa");
      this.diets.push("aa");
      this.dislikes.push("aa");
    }

    for (i = 0; i < 2; i++) {
      this.added.push("aa");
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuGeneratorPage');
  }

  segmentChanged(event) {
  }

  /**
   * toggle filter for auto menu generation
   */
  onToggleFilter() {
    this.filterOn = !this.filterOn;
  }

  onButPreset() {
    this.usePreset = !this.usePreset;
  }

  onButAccordion(index) {
    this.filterAccIndex = index;
  }

  onRecipeDetail(data) {
    // go to recipe detail page
    this.navCtrl.push(RecipeDetailPage);
  }

  onCalendar() {
    // show calendar page
    let calendarPage = this.modalCtrl.create(AddDatePage);
    calendarPage.present();
  }
}
