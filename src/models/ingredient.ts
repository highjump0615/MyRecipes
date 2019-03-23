import {BaseModel} from './base-model';
import DataSnapshot = firebase.database.DataSnapshot;

export class Ingredient extends BaseModel {
  //
  // table info
  //
  static TABLE_NAME = 'ingredients';
  static FIELD_NAME = 'name';
  static FIELD_UNIT = 'unit';

  name = '';
  unit = '';
  quantity = 0;

  tableName() {
    return Ingredient.TABLE_NAME;
  }

  constructor(snapshot?: DataSnapshot) {
    super(snapshot);

    if (snapshot) {
      const info = snapshot.val();

      this.name = info[Ingredient.FIELD_NAME];
      this.unit = info[Ingredient.FIELD_UNIT];
    }
  }

  toDictionary() {
    const dict = super.toDictionary();

    dict[Ingredient.FIELD_NAME] = this.name;
    dict[Ingredient.FIELD_UNIT] = this.unit;

    return dict;
  }

}
