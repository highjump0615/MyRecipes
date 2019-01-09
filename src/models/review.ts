import {BaseModel} from './base-model';
import DataSnapshot = firebase.database.DataSnapshot;
import {User} from './user';
import {Utils} from '../helpers/utils';

export class Review extends BaseModel {

  //
  // table info
  //
  static TABLE_NAME = 'reviews';
  static FIELD_TITLE = 'title';
  static FIELD_CONTENT = 'content';
  static FIELD_RATE = 'rate';
  static FIELD_USERID = 'userId';

  title = '';
  content = '';
  rate = 0;

  userId = '';
  user: User;

  tableName() {
    return Review.TABLE_NAME;
  }

  constructor(snapshot?: DataSnapshot) {
    super(snapshot);

    if (snapshot) {
      const info = snapshot.val();

      this.title = info[Review.FIELD_TITLE];
      this.content = info[Review.FIELD_CONTENT];
      this.rate = info[Review.FIELD_RATE];
      this.userId = info[Review.FIELD_USERID];
    } else {
      // new rate
      this.user = User.currentUser;
      this.userId = this.user.id;
    }
  }

  toDictionary() {
    const dict = super.toDictionary();

    dict[Review.FIELD_TITLE] = this.title;
    dict[Review.FIELD_CONTENT] = this.content;
    dict[Review.FIELD_RATE] = this.rate;
    dict[Review.FIELD_USERID] = this.userId;

    return dict;
  }

  dateFormatted() {
    return Utils.getInstance().toDateLong(this.createdAt);
  }
}
