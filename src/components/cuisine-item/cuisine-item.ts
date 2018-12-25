import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Cuisine} from "../../models/cuisine";

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

  @Input() index: Cuisine;
  @Input() item: Cuisine;
  @Output() selectChanged = new EventEmitter();

  constructor() {
  }

  /**
   * clicked main image
   *
   * @param {*} event
   * @memberof CuisineItemComponent
   */
  onSelectChangeed(event) {
    this.item.selected = !this.item.selected;

    this.selectChanged.emit({
      index: this.index,
      cuisine: this.item
    });
  }

}
