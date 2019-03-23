import {BaseModel} from './base-model';
import DataSnapshot = firebase.database.DataSnapshot;

export class Tip extends BaseModel {

  //
  // table info
  //
  static TABLE_NAME = 'tips';
  static FIELD_TITLE = 'title';
  static FIELD_CONTENT = 'content';

  title = '';
  content = '';

  tableName() {
    return Tip.TABLE_NAME;
  }

  constructor(snapshot?: DataSnapshot) {
    super(snapshot);

    if (snapshot) {
      const info = snapshot.val();

      this.title = info[Tip.FIELD_TITLE];
      this.content = info[Tip.FIELD_CONTENT];
    }
  }

  toDictionary() {
    const dict = super.toDictionary();

    dict[Tip.FIELD_TITLE] = this.title;
    dict[Tip.FIELD_CONTENT] = this.content;

    return dict;
  }
}
