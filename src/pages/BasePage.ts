import { NavController, MenuController } from 'ionic-angular';
import { HomePage } from './home/home';

export class BasePage {
  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {
  }

  gotoHome() {
    // go to main page
    this.navCtrl.setRoot(
      HomePage,
      {},
      {animate: true, direction: 'forward'}
    );
  }

  enableMenu(enable) {
    // disable menu
    this.menuCtrl.enable(enable, 'main');
  }
}
