import { MenuController, NavController, ToastController } from 'ionic-angular';
import { BasePage } from './BasePage';

export class BaseTextPage {

  initDone = false;

  constructor(
    public navCtrl: NavController
  ) {

  }

  ionViewDidEnter() {
    // resize text view
    this.initDone = true;
  }
}
