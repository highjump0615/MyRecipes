import {LoadingController, MenuController, NavController, ToastController} from 'ionic-angular';
import { BasePage } from './BasePage';

export class BaseLandingPage extends BasePage {
  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public loadingCtrl?: LoadingController
  ) {
    super(navCtrl, menuCtrl, toastCtrl, loadingCtrl);

    this.enableMenu(false);
  }
}
