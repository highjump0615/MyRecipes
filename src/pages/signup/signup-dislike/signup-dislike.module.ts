import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupDislikePage } from './signup-dislike';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    SignupDislikePage,
  ],
  imports: [
    IonicPageModule.forChild(SignupDislikePage),
    ComponentsModule
  ],
})
export class SignupDislikePageModule {}
