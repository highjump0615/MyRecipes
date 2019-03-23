import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupEmailPage } from './signup-email';
import { ComponentsModule } from '../../../components/components.module'

@NgModule({
  declarations: [
    SignupEmailPage,
  ],
  imports: [
    IonicPageModule.forChild(SignupEmailPage),
    ComponentsModule
  ],
})

export class SignupEmailPageModule {}
