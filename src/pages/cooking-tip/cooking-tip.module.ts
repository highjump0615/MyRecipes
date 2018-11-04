import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CookingTipPage } from './cooking-tip';

@NgModule({
  declarations: [
    CookingTipPage,
  ],
  imports: [
    IonicPageModule.forChild(CookingTipPage),
  ],
})
export class CookingTipPageModule {}
