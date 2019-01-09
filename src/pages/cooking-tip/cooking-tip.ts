import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Tip} from "../../models/tip";
import {FirebaseManager} from "../../helpers/firebase-manager";

/**
 * Generated class for the CookingTipPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cooking-tip',
  templateUrl: 'cooking-tip.html',
})

export class CookingTipPage {

  keyword = '';

  tipsAll: Array<Tip> = [];
  tips: Array<Tip> = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    // fetch tips
    const dbRef = FirebaseManager.ref();

    const query = dbRef.child(Tip.TABLE_NAME);
    query.once('value')
      .then((snapshot) => {
        console.log(snapshot);

        // clear
        const aryTip = [];

        snapshot.forEach(function(child) {
          const t = new Tip(child);

          aryTip.push(t);
        });

        this.tipsAll = aryTip;
        this.tips = aryTip;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CookingTipPage');
  }

  onChangeKeyword(event: UIEvent) {
    this.tips = [];

    // filter tips with keyword
    for (const t of this.tipsAll) {
      if (t.title.indexOf(this.keyword) >= 0) {
        this.tips.push(t);
        continue;
      }

      if (t.content.indexOf(this.keyword) >= 0) {
        this.tips.push(t);
      }
    }
  }
}
