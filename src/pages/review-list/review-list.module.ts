import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReviewListPage } from './review-list';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ReviewListPage,
  ],
  imports: [
    IonicPageModule.forChild(ReviewListPage),
    ComponentsModule
  ],
})
export class ReviewListPageModule {}
