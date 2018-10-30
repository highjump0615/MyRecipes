import { Component, Input } from '@angular/core';

/**
 * Generated class for the CuisineItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'cuisine-item',
  templateUrl: 'cuisine-item.html'
})

export class CuisineItemComponent {

  @Input() text: string;

  /**
   * item is selected or not
   *
   * @memberof CuisineItemComponent
   */
  selected = false;

  constructor() {
    console.log('Hello CuisineItemComponent Component');
  }

  /**
   * clicked main image
   *
   * @param {*} event
   * @memberof CuisineItemComponent
   */
  onSelectChangeed(event) {
    this.selected = !this.selected;
  }

}
