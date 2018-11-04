import { Component } from '@angular/core';
import { PopoverController, ViewController } from 'ionic-angular';
import { RecipeDetailMoreSecondaryComponent } from './recipe-detail-more-secondary/recipe-detail-more-secondary';

/**
 * Generated class for the RecipeDetailMoreComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'recipe-detail-more',
  templateUrl: 'recipe-detail-more.html'
})
export class RecipeDetailMoreComponent {

  constructor(
    public popoverCtrl: PopoverController,
    public viewCtrl: ViewController
  ) {
    console.log('Hello RecipeDetailMoreComponent Component');
  }

  onButMenu(event) {
    let popover = this.popoverCtrl.create(
      RecipeDetailMoreSecondaryComponent,
      {
        from: this
      },
      {
        cssClass: 'secondary-popover',
        enableBackdropDismiss: true
      }
    );

    popover.present({
      ev: event,
      animate: false
    });
  }

  onCancel() {
    this.viewCtrl.dismiss({}, "", {
      animate: false
    });
  }
}
