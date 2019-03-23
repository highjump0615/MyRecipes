import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupAllergiesPage } from './signup-allergies';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    SignupAllergiesPage,
  ],
  imports: [
    IonicPageModule.forChild(SignupAllergiesPage),
    ComponentsModule
  ],
})
export class SignupAllergiesPageModule {}
