import * as firebase from 'firebase/app';
import 'firebase/database';

export class FirebaseManager {

  static ref() {
    return firebase.database().ref();
  }
}
