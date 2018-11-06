import { MenuController, NavController, ToastController } from 'ionic-angular';
import { BasePage } from './BasePage';

export class BaseLandingPage extends BasePage {
  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController
  ) {
    super(navCtrl, menuCtrl, toastCtrl);

    this.enableMenu(false);
  }
}
