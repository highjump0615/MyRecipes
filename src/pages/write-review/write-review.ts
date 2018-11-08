import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BaseTextPage } from '../BaseTextPage';

/**
 * Generated class for the WriteReviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-write-review',
  templateUrl: 'write-review.html',
})
export class WriteReviewPage extends BaseTextPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    super(navCtrl);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WriteReviewPage');
  }

  onButSubmit() {

  }
}
