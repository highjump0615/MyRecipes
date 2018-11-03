import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PreferencePage } from './preference';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    PreferencePage,
  ],
  imports: [
    IonicPageModule.forChild(PreferencePage),
    ComponentsModule
  ],
})

export class PreferencePageModule {}
