import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuDetailPage } from './menu-detail';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    MenuDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuDetailPage),
    ComponentsModule
  ],
})
export class MenuDetailPageModule {}
