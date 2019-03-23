import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyRecipesPage } from './my-recipes';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    MyRecipesPage,
  ],
  imports: [
    IonicPageModule.forChild(MyRecipesPage),
    ComponentsModule
  ],
})
export class MyRecipesPageModule {}
