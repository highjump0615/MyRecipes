import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddDatePage } from './add-date';

@NgModule({
  declarations: [
    AddDatePage,
  ],
  imports: [
    IonicPageModule.forChild(AddDatePage),
  ],
})
export class AddDatePageModule {}
