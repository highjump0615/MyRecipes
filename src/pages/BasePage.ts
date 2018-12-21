import {NavController, MenuController, ToastController, LoadingController} from 'ionic-angular';
import { HomePage } from './home/home';

export class BasePage {
  loadingView: any;

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public loadingCtrl?: LoadingController) {
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

  showLoadingView(show = true, desc?: String) {
    if (show) {
      // show loading view
      this.loadingView = this.loadingCtrl.create();
      this.loadingView.present();
    }
    else {
      // hide
      this.loadingView.dismiss();
    }
  }
}
