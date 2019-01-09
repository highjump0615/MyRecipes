import {BaseModel} from './base-model';
import DataSnapshot = firebase.database.DataSnapshot;
import {Ingredient} from './ingredient';
import {BaseIngredient} from './base-ingredient';
import {User} from './user';
import {FirebaseManager} from '../helpers/firebase-manager';

export class Shopping extends BaseIngredient {

  //
  // table info
  //
  static TABLE_NAME = 'shoppings';
  static FIELD_NAME = 'name';

  name = '';

  tableName() {
    return Shopping.TABLE_NAME;
  }

  constructor(snapshot?: DataSnapshot) {
    super(snapshot);

    if (snapshot) {
      const info = snapshot.val();

      this.name = info[Shopping.FIELD_NAME];
    }
  }

  toDictionary() {
    const dict = super.toDictionary();

    dict[Shopping.FIELD_NAME] = this.name;

    return dict;
  }
}
