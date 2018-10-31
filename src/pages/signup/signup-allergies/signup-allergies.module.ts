import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupAllergiesPage } from './signup-allergies';

@NgModule({
  declarations: [
    SignupAllergiesPage,
  ],
  imports: [
    IonicPageModule.forChild(SignupAllergiesPage),
  ],
})
export class SignupAllergiesPageModule {}
