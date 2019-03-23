import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilterSearchPage } from './filter-search';

@NgModule({
  declarations: [
    FilterSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(FilterSearchPage),
  ],
})
export class FilterSearchPageModule {}
