import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { BasePage } from '../BasePage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage extends BasePage {

  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {
    super(navCtrl, menuCtrl);

    // enable menu
    this.enableMenu(true);
  }

}
