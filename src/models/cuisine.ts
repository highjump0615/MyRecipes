import {BaseModel} from "./base-model";
import DataSnapshot = firebase.database.DataSnapshot;

export class Cuisine extends BaseModel {

  //
  // table info
  //
  static TABLE_NAME = 'cuisines';
  static TABLE_NAME_ALLERGY = 'allergies';
  static TABLE_NAME_DISLIKE = 'dislikes';
  static FIELD_NAME = 'name';

  name = '';
  selected = false;

  tableName() {
    return Cuisine.TABLE_NAME;
  }

  constructor(snapshot: DataSnapshot) {
    super(snapshot);

    let info = snapshot.val();

    this.name = info[Cuisine.FIELD_NAME];
  }

}
