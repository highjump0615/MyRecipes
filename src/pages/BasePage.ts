import { NavController, MenuController, ToastController } from 'ionic-angular';
import { HomePage } from './home/home';

export class BasePage {
  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController) {
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

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
}
