import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupProfilePage } from './signup-profile';

@NgModule({
  declarations: [
    SignupProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(SignupProfilePage),
  ],
})
export class SignupProfilePageModule {}
