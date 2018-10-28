import { Component, Input } from '@angular/core';

/**
 * Generated class for the CheckBoxComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'check-box',
  templateUrl: 'check-box.html'
})

export class CheckBoxComponent {

  @Input() text: String;

  constructor() {
    console.log('Hello CheckBoxComponent Component');
  }

}
