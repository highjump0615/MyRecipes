import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavouritesPage } from './favourites';
import { ComponentsModule } from '../../components/components.module';
import { StarRatingModule } from 'ionic3-star-rating';

@NgModule({
  declarations: [
    FavouritesPage,
  ],
  imports: [
    IonicPageModule.forChild(FavouritesPage),
    StarRatingModule
  ],
})
export class FavouritesPageModule {}
