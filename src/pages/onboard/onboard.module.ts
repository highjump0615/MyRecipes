import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OnboardPage } from './onboard';

@NgModule({
  declarations: [
    OnboardPage,
  ],
  imports: [
    IonicPageModule.forChild(OnboardPage),
  ],
})
export class OnboardPageModule {}
