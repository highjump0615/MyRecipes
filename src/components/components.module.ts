import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CheckBoxComponent } from './check-box/check-box';
import { CuisineItemComponent } from './cuisine-item/cuisine-item';
import { IonicModule } from 'ionic-angular';

@NgModule({
	declarations: [CheckBoxComponent,
    CuisineItemComponent],
	imports: [IonicModule],
  exports: [CheckBoxComponent,
    CuisineItemComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ComponentsModule {}
