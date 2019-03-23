import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { User } from '../models/user';
import {Storage} from "@ionic/storage";
import * as firebase from 'firebase/app';
import {environment} from "../environments/environments";
import {FirebaseManager} from "../helpers/firebase-manager";

import { SigninPage, SplashPage, HomePage, OnboardPage, SettingsPage, PreferencePage } from '../pages';
import {BasePage} from "../pages/BasePage";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  static KEY_ONBOARD = 'onboard';

  rootPage: any;

  pages: Array<{title: string, component: any, icon: string}>;

  fetchedCuisineCount = 0;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private storage: Storage
  ) {
    // init firebase
    firebase.initializeApp(environment.firebase);
    FirebaseManager.initServerTime();

    //
    // set root page based on log in state
    //
    const that = this;

    let unsubscribe = firebase.auth().onAuthStateChanged(function(user) {

      // do not listen anymore
      unsubscribe();

      if (user) {
        // fetch current user
        User.readFromDatabase(user.uid, (user) => {
          User.currentUser = user;

          if (user) {
            user.fetchCuisines(() => {
              // go to home page
              that.setRootPage(BasePage.getMainPage());
            });
          }
          else {
            that.goToSigninView();
          }
        });

      } else {
        // No user is signed in.
        that.goToSigninView();
      }
    });

    this.rootPage = SplashPage;

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon: 'home' },
      { title: 'Preferences', component: PreferencePage, icon: 'logo-buffer' },
      { title: 'Settings', component: SettingsPage, icon: 'settings' }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  goToSigninView() {
    this.storage.get(MyApp.KEY_ONBOARD).then((value) => {
      if (value) {
        // onboard is already shown, go to sign in page directly
        this.setRootPage(SigninPage);
      }
      else {
        // app is opened for the first time
        this.setRootPage(OnboardPage);
      }
    });
  }

  /**
   * set root page with animation
   * @param page
   */
  setRootPage(page) {
    this.nav.setRoot(
      page,
      {},
      {animate: true, direction: 'forward'}
    );
  }

  onLogout() {
    // clear current user
    FirebaseManager.signOut();
    User.currentUser = null;

    // go to log in page
    this.nav.setRoot(
      SigninPage,
      {},
      {animate: true, direction: 'backward'}
    );
  }

}
