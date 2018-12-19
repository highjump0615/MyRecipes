import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, Toast, ToastController, MenuController } from 'ionic-angular';
import { TermsPage } from '../terms/terms';
import { AboutAppPage } from '../about-app/about-app';
import { EmailComposer } from '@ionic-native/email-composer'
import { BasePage } from '../BasePage';
import {Utils} from "../../helpers/utils";

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})

export class SettingsPage extends BasePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    private emailComposer: EmailComposer,
    public platform: Platform,
    public toastCtrl: ToastController) {
      super(navCtrl, menuCtrl, toastCtrl)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  onButAbout() {
    // go to about app page
    this.navCtrl.push(AboutAppPage);
  }

  onButPrivacy() {
    // go to privacy page
    var params = {};
    params[TermsPage.PARAM_TYPE] = TermsPage.TYPE_POLICY;

    this.navCtrl.push(TermsPage, params);
  }

  onButReport() {
    if (Utils.isPlatformWeb(this.platform)) {
      // this is not app
      this.presentToast('Can be used in apps only');
    }
    else {
      this.emailComposer.isAvailable().then((available: boolean) => {
        if (available) {
          let email = {
            to: 'max@mustermann.de',
            subject: 'Report a Problem',
            isHtml: true
          };

          // Send a text message using default options
          this.emailComposer.open(email);
        }
      });
    }
  }

}
