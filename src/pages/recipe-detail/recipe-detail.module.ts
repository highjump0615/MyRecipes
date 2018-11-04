import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecipeDetailPage } from './recipe-detail';
import { StarRatingModule } from 'ionic3-star-rating';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    RecipeDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(RecipeDetailPage),
    StarRatingModule,
    ComponentsModule
  ],
})

export class RecipeDetailPageModule {}
