import { Component } from '@angular/core';

/**
 * Generated class for the RecipeGridItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'recipe-grid-item',
  templateUrl: 'recipe-grid-item.html'
})

export class RecipeGridItemComponent {

  text: string;

  constructor() {
    console.log('Hello RecipeGridItemComponent Component');
    this.text = 'Hello World';
  }

}
