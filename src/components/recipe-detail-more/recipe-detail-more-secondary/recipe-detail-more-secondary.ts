import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { RecipeDetailMoreComponent } from '../recipe-detail-more';

/**
 * Generated class for the RecipeDetailMoreSecondaryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'recipe-detail-more-secondary',
  templateUrl: 'recipe-detail-more-secondary.html'
})

export class RecipeDetailMoreSecondaryComponent {

  parentView: RecipeDetailMoreComponent

  constructor(
    public navParams:NavParams,
    public viewCtrl: ViewController
  ) {
    this.parentView = navParams.get('from');
  }

  onButMenu(event) {
    // close menu
    this.viewCtrl.dismiss({}, "", {
      animate: false
    });

    // close parent menu
    this.parentView.onCancel();
  }

}
