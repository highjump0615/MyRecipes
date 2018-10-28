import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CheckBoxComponent } from './check-box/check-box';

@NgModule({
	declarations: [CheckBoxComponent],
	imports: [],
  exports: [CheckBoxComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ComponentsModule {}
