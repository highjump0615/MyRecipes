import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { SignupDislikePage } from '../signup-dislike/signup-dislike';

/**
 * Generated class for the SignupAllergiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup-favourite',
  templateUrl: 'signup-allergies.html',
})

export class SignupAllergiesPage {

  /**
   * current accordion item
   * 0: Allergies
   * 1: Diets
   *
   * @memberof SignupAllergiesPage
   */
  currentItem = 0;

  allergies: Array<string> = [];
  diets: Array<string> = [];

  @ViewChild('accordionContent') accordContent: ElementRef;

  heightAccord = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // init data
    for (var i = 0; i < 15; i++) {
      this.allergies.push("aa");
    }

    for (i = 0; i < 15; i++) {
      this.diets.push("aa");
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupAllergiesPage');

    console.log(this.accordContent.nativeElement.offsetHeight);
  }

  /**
   * allergy accordion button
   * @param event
   */
  onButAccordion(index) {
    this.currentItem = index;
  }

  /**
   * next button
   * @param event
   */
  onButNext(event) {
    // go to signup password page
    this.navCtrl.push(SignupDislikePage);
  }

}
