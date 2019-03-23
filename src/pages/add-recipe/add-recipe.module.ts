import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddRecipePage } from './add-recipe';

@NgModule({
  declarations: [
    AddRecipePage,
  ],
  imports: [
    IonicPageModule.forChild(AddRecipePage),
  ],
})
export class AddRecipePageModule {}
