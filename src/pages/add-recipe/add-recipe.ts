import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BaseTextPage } from '../BaseTextPage';

/**
 * Generated class for the AddRecipePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-recipe',
  templateUrl: 'add-recipe.html',
})
export class AddRecipePage extends BaseTextPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    super(navCtrl);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddRecipePage');

  }

  onButAdd() {

  }

}
