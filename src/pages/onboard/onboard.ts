import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ToastController } from 'ionic-angular';

import { BaseLandingPage } from '../BaseLandingPage';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { Storage } from '@ionic/storage'

import { SigninPage } from '../signin/signin';
import {MyApp} from "../../app/app.component";


/**
 * Generated class for the OnboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-onboard',
  templateUrl: 'onboard.html',
})

export class OnboardPage extends BaseLandingPage {

  @ViewChild(Slides) slides: Slides;

  /**
   * title of next button
   *
   * @memberof OnboardPage
   */
  titleButNext = "Next";

  /**
   * show/hide skip button
   *
   * @memberof OnboardPage
   */
  showSkipButton = true;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    private storage: Storage) {

    super(navCtrl, menuCtrl, toastCtrl);
  }

  ionViewDidLoad() {
  }

  slideWillChange() {
    let currentIndex = this.slides.getActiveIndex();
    if (currentIndex < this.slides._slides.length - 1) {
      this.titleButNext = "Next";
      this.showSkipButton = true;
    }
    else {
      this.titleButNext = "All Done!";
      this.showSkipButton = false;
    }
  }

  /**
   * next button
   * @param event
   */
  onButNext(event) {
    this.slides.slideNext();

    let currentIndex = this.slides.getActiveIndex();
    if (currentIndex >= this.slides._slides.length - 1) {
      this.gotoLoginPage();
    }
  }

  /**
   * skipe button
   * @param event
   */
  onButSkip(event) {
    this.gotoLoginPage();
  }

  /**
   * go to log in page
   */
  gotoLoginPage() {
    // set onboard flag
    this.storage.set(MyApp.KEY_ONBOARD, true);

    this.navCtrl.push(SigninPage);
  }

}
