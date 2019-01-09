import { Component } from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {BasePage} from "../BasePage";
import {FirebaseManager} from "../../helpers/firebase-manager";

/**
 * Generated class for the ForgetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forget',
  templateUrl: 'forget.html',
})
export class ForgetPage extends BasePage {

  email = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController
  ) {
    super(navCtrl, null, null, loadingCtrl);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgetPage');
  }

  onButSubmit() {
    //
    // check input validity
    //
    if (!this.email) {
      let alert = this.alertCtrl.create({
        title: 'Email Invalid',
        message: 'Please enter your email',
        buttons: ['Ok']
      });
      alert.present();

      return;
    }

    this.showLoadingView();

    const that = this;

    FirebaseManager.auth().sendPasswordResetEmail(this.email)
      .then(function() {
        that.showLoadingView(false);

        // Email sent.
        let alert = that.alertCtrl.create({
          title: 'Reset Password',
          message: 'Password reset has been sent to your email address.',
          buttons: ['Ok']
        });
        alert.present();
      })
      .catch(function(error) {
        that.showLoadingView(false);

        // show error alert
        let alert = that.alertCtrl.create({
          title: 'Reset Failed',
          message: error.message,
          buttons: ['Ok']
        });
        alert.present();
      });
  }

}
