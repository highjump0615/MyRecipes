import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { OnboardPage } from "../pages/onboard/onboard";
import { SigninPage } from '../pages/signin/signin';
import { SettingsPage } from '../pages/settings/settings';
import { PreferencePage } from '../pages/preference/preference';
import { User } from '../models/user';
import {Storage} from "@ionic/storage";
import * as firebase from 'firebase/app';
import {environment} from "../environments/environments";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  static KEY_ONBOARD = 'onboard';

  rootPage: any;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private storage: Storage
  ) {
    // init firebase
    firebase.initializeApp(environment.firebase);

    //
    // set root page based on log in state
    //

    // todo: if logged in

    this.storage.get(MyApp.KEY_ONBOARD).then((value) => {
      if (value) {
        // onboard is already shown, go to sign in page directly
        this.rootPage = SigninPage;
      }
      else {
        // app is opened for the first time
        this.rootPage = OnboardPage;
      }
    });

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

  onLogout() {
    // clear current user
    User.currentUser = null;

    // go to log in page
    this.nav.setRoot(
      SigninPage,
      {},
      {animate: true, direction: 'backward'}
    );
  }

}
