import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { OnboardPage } from '../pages/onboard/onboard';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SigninPage } from '../pages/signin/signin';
import { ForgetPage } from '../pages/forget/forget';
import { SignupEmailPageModule } from '../pages/signup/signup-email/signup-email.module'
import { SignupPasswordPageModule } from '../pages/signup/signup-password/signup-password.module';
import { SignupProfilePage } from '../pages/signup/signup-profile/signup-profile'
import { SignupFavouritePageModule } from '../pages/signup/signup-favourite/signup-favourite.module';
import { SignupAllergiesPageModule } from '../pages/signup/signup-allergies/signup-allergies.module';
import { SignupDislikePageModule } from '../pages/signup/signup-dislike/signup-dislike.module';
import { TermsPage } from '../pages/terms/terms';
import { SettingsPage } from '../pages/settings/settings';
import { AboutAppPage } from '../pages/about-app/about-app';
import { EmailComposer } from '@ionic-native/email-composer';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    OnboardPage,
    SigninPage,
    ForgetPage,
    SignupProfilePage,
    TermsPage,
    SettingsPage,
    AboutAppPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      backButtonIcon: 'md-arrow-back'
    }),
    SignupEmailPageModule,
    SignupPasswordPageModule,
    SignupFavouritePageModule,
    SignupAllergiesPageModule,
    SignupDislikePageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    OnboardPage,
    SigninPage,
    ForgetPage,
    SignupProfilePage,
    TermsPage,
    SettingsPage,
    AboutAppPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EmailComposer
  ]
})
export class AppModule {}
