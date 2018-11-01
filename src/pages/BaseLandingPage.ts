import { MenuController, NavController } from 'ionic-angular';
import { BasePage } from './BasePage';

export class BaseLandingPage extends BasePage {
  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {
    super(navCtrl, menuCtrl);

    this.enableMenu(false);
  }
}
