import {BaseModel} from "./base-model";
import {FirebaseManager} from "../helpers/firebase-manager";
import DataSnapshot = firebase.database.DataSnapshot;

export class User extends BaseModel {

  static currentUser: User;

  //
  // table info
  //
  static TABLE_NAME = 'users';
  static FIELD_EMAIL = 'email';
  static FIELD_FIRSTNAME = 'firstName';
  static FIELD_LASTNAME = 'lastName';
  static FIELD_PHOTO = 'photoUrl';
  static FIELD_DESC = 'description';
  static FIELD_FAVOURITE = 'favourites';
  static FIELD_FAVOURITE_DONE = 'favouritesDone';
  static FIELD_ALLERGY = 'allergies';
  static FIELD_ALLERGY_DONE = 'allergiesDone';
  static FIELD_DIET = 'diets';
  static FIELD_DISLIKE = 'dislikes';
  static FIELD_DISLIKE_DONE = 'dislikesDone';

  email = '';
  firstName = '';
  lastName = '';
  desc = '';
  photoUrl = '';

  favourites: any;
  favouritesDone = false;

  allergies: any;
  allergiesDone = false;
  diets: any;

  dislikes: any;
  dislikesDone = false;


  constructor();
  constructor(withId: string);
  constructor(withId: string, snapshot?: DataSnapshot);
  constructor(withId?: string, snapshot?: DataSnapshot) {
    super();

    if (withId) {
      this.id = withId;
    }

    if (snapshot) {
      super(snapshot);

      let info = snapshot.val();

      this.email = info[User.FIELD_EMAIL];
      this.firstName = info[User.FIELD_FIRSTNAME];
      this.lastName = info[User.FIELD_LASTNAME];
      this.photoUrl = info[User.FIELD_PHOTO];
      this.desc = info[User.FIELD_DESC];

      // favourites
      this.favouritesDone = info[User.FIELD_FAVOURITE_DONE];
      this.favourites = info[User.FIELD_FAVOURITE];
    }
  }


  static readFromDatabase(withId: string, completion: (User?) => void) {
    let userRef = FirebaseManager.ref().child(User.TABLE_NAME).child(withId);

    userRef.once('value')
      .then((snapshot) => {
        if (!snapshot.exists()) {
          completion();
          return;
        }

        let user = new User(null, snapshot);
        completion(user);
      })
      .catch((err) => {
        console.log(err);

        completion();
      });
  }

  tableName() {
    return User.TABLE_NAME;
  }

  toDictionary() {
    let dict = super.toDictionary();

    dict[User.FIELD_EMAIL] = this.email;
    dict[User.FIELD_FIRSTNAME] = this.firstName;
    dict[User.FIELD_LASTNAME] = this.lastName;
    dict[User.FIELD_PHOTO] = this.photoUrl;
    dict[User.FIELD_DESC] = this.desc;

    if (this.favourites) {
      dict[User.FIELD_FAVOURITE] = this.favourites;
    }

    return dict;
  }

  fullName() {
    return this.firstName + ' ' + this.lastName;
  }
}
