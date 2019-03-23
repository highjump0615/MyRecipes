import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecipeMenuPage } from './recipe-menu';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    RecipeMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(RecipeMenuPage),
    ComponentsModule
  ],
})
export class RecipeMenuPageModule {}
