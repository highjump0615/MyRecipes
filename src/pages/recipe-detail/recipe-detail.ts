import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, MenuController, ToastController } from 'ionic-angular';
import { RecipeDetailMoreComponent } from '../../components/recipe-detail-more/recipe-detail-more';
import { Recipe } from '../../models/recipe';
import { BasePage } from '../BasePage';

/**
 * Generated class for the RecipeDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recipe-detail',
  templateUrl: 'recipe-detail.html',
})

export class RecipeDetailPage extends BasePage {

  recipe: Recipe;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public popoverCtrl: PopoverController,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController
  ) {
    super(navCtrl, menuCtrl, toastCtrl);

    this.recipe = new Recipe();

    this.enableMenu(false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipeDetailPage');
  }

  presentPopover(event) {
    let popover = this.popoverCtrl.create(
      RecipeDetailMoreComponent,
      {},
      {
        cssClass: 'primary-popover'
      }
    );

    popover.present({
      ev: event
    });
  }

}
