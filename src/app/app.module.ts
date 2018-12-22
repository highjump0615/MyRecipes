import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { OnboardPage } from '../pages/onboard/onboard';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SignupEmailPageModule } from '../pages/signup/signup-email/signup-email.module'
import { SignupPasswordPageModule } from '../pages/signup/signup-password/signup-password.module';
import { SignupFavouritePageModule } from '../pages/signup/signup-favourite/signup-favourite.module';
import { SignupAllergiesPageModule } from '../pages/signup/signup-allergies/signup-allergies.module';
import { SignupDislikePageModule } from '../pages/signup/signup-dislike/signup-dislike.module';
import { EmailComposer } from '@ionic-native/email-composer';
import { HomePageModule } from '../pages/home/home.module';
import { PreferencePageModule } from '../pages/preference/preference.module';
import { RecipeDetailPageModule } from '../pages/recipe-detail/recipe-detail.module';
import { RecipeDetailMoreComponent } from '../components/recipe-detail-more/recipe-detail-more';
import { RecipeDetailMoreSecondaryComponent } from '../components/recipe-detail-more/recipe-detail-more-secondary/recipe-detail-more-secondary';
import { MenuDetailPageModule } from '../pages/menu-detail/menu-detail.module';
import { FavouritesPageModule } from '../pages/favourites/favourites.module';
import { MyRecipesPageModule } from '../pages/my-recipes/my-recipes.module';
import { MenuGeneratorPageModule } from '../pages/menu-generator/menu-generator.module';
import { ReviewListPageModule } from '../pages/review-list/review-list.module';
import { WriteReviewPageModule } from '../pages/write-review/write-review.module';
import { RecipeMenuPageModule } from '../pages/recipe-menu/recipe-menu.module';
import { MenuDetail2PageModule } from '../pages/menu-detail2/menu-detail2.module';
import {IonicStorageModule} from "@ionic/storage";

import {AppExceptionHandler} from "../helpers/exception-handler";
import {AboutAppPageModule} from "../pages/about-app/about-app.module";
import {AddDatePageModule} from "../pages/add-date/add-date.module";
import {AddRecipePageModule} from "../pages/add-recipe/add-recipe.module";
import {CookingTipPageModule} from "../pages/cooking-tip/cooking-tip.module";
import {FilterSearchPageModule} from "../pages/filter-search/filter-search.module";
import {ForgetPageModule} from "../pages/forget/forget.module";
import {OnboardPageModule} from "../pages/onboard/onboard.module";
import {SigninPageModule} from "../pages/signin/signin.module";
import {SignupProfilePageModule} from "../pages/signup/signup-profile/signup-profile.module";
import {TermsPageModule} from "../pages/terms/terms.module";
import {SettingsPageModule} from "../pages/settings/settings.module";
import {ShoppingListPageModule} from "../pages/shopping-list/shopping-list.module";
import {SplashPageModule} from "../pages/splash/splash.module";
import {GooglePlus} from "@ionic-native/google-plus";


@NgModule({
  declarations: [
    MyApp,
    RecipeDetailMoreComponent,
    RecipeDetailMoreSecondaryComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      backButtonIcon: 'md-arrow-back'
    }),
    IonicStorageModule.forRoot(),
    SignupEmailPageModule,
    SignupPasswordPageModule,
    SignupFavouritePageModule,
    SignupAllergiesPageModule,
    SignupDislikePageModule,
    HomePageModule,
    PreferencePageModule,
    RecipeDetailPageModule,
    MenuDetailPageModule,
    FavouritesPageModule,
    MyRecipesPageModule,
    MenuGeneratorPageModule,
    ReviewListPageModule,
    WriteReviewPageModule,
    RecipeMenuPageModule,
    MenuDetail2PageModule,
    AboutAppPageModule,
    AddDatePageModule,
    AddRecipePageModule,
    CookingTipPageModule,
    FilterSearchPageModule,
    ForgetPageModule,
    OnboardPageModule,
    SigninPageModule,
    SignupProfilePageModule,
    TermsPageModule,
    SettingsPageModule,
    ShoppingListPageModule,
    SplashPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RecipeDetailMoreComponent,
    RecipeDetailMoreSecondaryComponent,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: AppExceptionHandler},
    EmailComposer,
    GooglePlus
  ]
})
export class AppModule {}
