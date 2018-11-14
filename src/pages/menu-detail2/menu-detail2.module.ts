import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuDetail2Page } from './menu-detail2';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    MenuDetail2Page,
  ],
  imports: [
    IonicPageModule.forChild(MenuDetail2Page),
    ComponentsModule
  ],
})
export class MenuDetail2PageModule {}
