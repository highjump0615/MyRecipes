import {NavController, MenuController, ToastController, LoadingController} from 'ionic-angular';
import {HomePage, SigninPage, SignupFavouritePage, SignupAllergiesPage, SignupDislikePage} from '.';
import {User} from "../models/user";

export class BasePage {
  loadingView: any;

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public loadingCtrl?: LoadingController) {
  }

  static getMainPage() {
    let userCurrent = User.currentUser;

    // not logged in
    if (!userCurrent) {
      return SigninPage;
    }

    //
    // logged in, but not initialized
    //
    if (!userCurrent.favouriteCuisines) {
      return SignupFavouritePage;
    }
    if (!userCurrent.allergies) {
      return SignupAllergiesPage;
    }
    if (!userCurrent.dislikes) {
      return SignupDislikePage;
    }

    return HomePage;
  }

  gotoHome() {
    // go to main page
    this.navCtrl.setRoot(
      BasePage.getMainPage(),
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
      if (this.loadingView) {
        // hide
        this.loadingView.dismiss();
      }
    }
  }
}
