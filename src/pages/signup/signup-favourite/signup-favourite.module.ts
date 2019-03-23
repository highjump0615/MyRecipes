import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupFavouritePage } from './signup-favourite';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    SignupFavouritePage,
  ],
  imports: [
    IonicPageModule.forChild(SignupFavouritePage),
    ComponentsModule
  ],
})
export class SignupFavouritePageModule {}
