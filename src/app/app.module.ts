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
// import { SignupEmailPage } from '../pages/signup/signup-email/signup-email';
import { SignupEmailPageModule } from '../pages/signup/signup-email/signup-email.module'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    OnboardPage,
    SigninPage,
    ForgetPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      backButtonIcon: 'md-arrow-back'
    }),
    SignupEmailPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    OnboardPage,
    SigninPage,
    ForgetPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
