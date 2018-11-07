import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuGeneratorPage } from './menu-generator';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    MenuGeneratorPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuGeneratorPage),
    ComponentsModule
  ],
})
export class MenuGeneratorPageModule {}
