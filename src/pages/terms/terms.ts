import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {environment} from "../../environments/environments";
import {DomSanitizer} from "@angular/platform-browser";

/**
 * Generated class for the TermsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-terms',
  templateUrl: 'terms.html',
})
export class TermsPage {

  static TYPE_TERMS = 0;
  static TYPE_POLICY = 1;
  static PARAM_TYPE = "type";

  type = TermsPage.TYPE_TERMS;
  title = "Terms and Conditions";

  loading = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private sanitizer: DomSanitizer
  ) {
    this.type = navParams.get(TermsPage.PARAM_TYPE);

    // init UI
    if (this.type == TermsPage.TYPE_POLICY) {
      this.title = "Privacy Policy";
    }
    else {
      this.title = "Terms and Conditions";
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TermsPage');
  }

  getUrl() {
    const urlPrivacy = this.sanitizer.bypassSecurityTrustResourceUrl(environment.urlPrivacyPolicy);
    const urlTerms = this.sanitizer.bypassSecurityTrustResourceUrl(environment.urlTerms);
    return this.type == TermsPage.TYPE_POLICY ? urlPrivacy : urlTerms;
  }

  dismissLoading() {
    this.loading = false;

    console.log('dismissLoading');
  }
}
