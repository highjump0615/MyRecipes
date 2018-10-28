import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupPasswordPage } from './signup-password';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    SignupPasswordPage,
  ],
  imports: [
    IonicPageModule.forChild(SignupPasswordPage),
    ComponentsModule
  ],
})
export class SignupPasswordPageModule {}
