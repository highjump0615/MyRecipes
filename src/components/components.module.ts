import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CheckBoxComponent } from './check-box/check-box';
import { CuisineItemComponent } from './cuisine-item/cuisine-item';
import { IonicModule } from 'ionic-angular';
import { RecipeGridItemComponent } from './recipe-grid-item/recipe-grid-item';
import { StarRateComponent } from './star-rate/star-rate';

@NgModule({
	declarations: [CheckBoxComponent,
    CuisineItemComponent,
    RecipeGridItemComponent,
    StarRateComponent],
	imports: [IonicModule],
  exports: [CheckBoxComponent,
    CuisineItemComponent,
    RecipeGridItemComponent,
    StarRateComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ComponentsModule {}
