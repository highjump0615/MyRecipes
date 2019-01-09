import { Component, Input } from '@angular/core';
import {Recipe} from "../../models/recipe";

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

  @Input() recipe: Recipe;
  @Input() showDate = true;

  constructor() {
  }

}
