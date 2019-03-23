import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecipeDetailPage } from './recipe-detail';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    RecipeDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(RecipeDetailPage),
    ComponentsModule
  ],
})

export class RecipeDetailPageModule {}
