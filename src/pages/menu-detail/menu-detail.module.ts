import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuDetailPage } from './menu-detail';
import { StarRatingModule } from 'ionic3-star-rating';

@NgModule({
  declarations: [
    MenuDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuDetailPage),
    StarRatingModule
  ],
})
export class MenuDetailPageModule {}
