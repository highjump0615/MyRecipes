import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
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
import { HomePageModule } from '../pages/home/home.module';
import { PreferencePageModule } from '../pages/preference/preference.module';
import { RecipeDetailPageModule } from '../pages/recipe-detail/recipe-detail.module';
import { RecipeDetailMoreComponent } from '../components/recipe-detail-more/recipe-detail-more';
import { RecipeDetailMoreSecondaryComponent } from '../components/recipe-detail-more/recipe-detail-more-secondary/recipe-detail-more-secondary';
import { MenuDetailPage } from '../pages/menu-detail/menu-detail';
import { MenuDetailPageModule } from '../pages/menu-detail/menu-detail.module';
import { ShoppingListPage } from '../pages/shopping-list/shopping-list';
import { CookingTipPage } from '../pages/cooking-tip/cooking-tip';
import { FavouritesPageModule } from '../pages/favourites/favourites.module';


@NgModule({
  declarations: [
    MyApp,
    OnboardPage,
    SigninPage,
    ForgetPage,
    SignupProfilePage,
    TermsPage,
    SettingsPage,
    AboutAppPage,
    RecipeDetailMoreComponent,
    RecipeDetailMoreSecondaryComponent,
    ShoppingListPage,
    CookingTipPage
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
    SignupDislikePageModule,
    HomePageModule,
    PreferencePageModule,
    RecipeDetailPageModule,
    MenuDetailPageModule,
    FavouritesPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    OnboardPage,
    SigninPage,
    ForgetPage,
    SignupProfilePage,
    TermsPage,
    SettingsPage,
    AboutAppPage,
    RecipeDetailMoreComponent,
    RecipeDetailMoreSecondaryComponent,
    ShoppingListPage,
    CookingTipPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EmailComposer
  ]
})
export class AppModule {}
