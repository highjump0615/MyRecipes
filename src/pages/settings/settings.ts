import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TermsPage } from '../terms/terms';
import { AboutAppPage } from '../about-app/about-app';

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
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  onButAbout() {
    // go to about app page
    this.navCtrl.push(AboutAppPage);
  }

  onButPrivacy() {
    // go to proviacy page
    var params = {};
    params[TermsPage.PARAM_TYPE] = TermsPage.TYPE_POLICY;

    this.navCtrl.push(TermsPage, params);
  }

  onButReport() {
  }

}
