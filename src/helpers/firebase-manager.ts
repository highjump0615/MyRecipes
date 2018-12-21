import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

export class FirebaseManager {

  static ServerOffset = 0.0;

  static auth() {
    return firebase.auth();
  }

  static ref() {
    return firebase.database().ref();
  }

  static initServerTime() {
    let serverTimeQuery = FirebaseManager.ref().child('.info/serverTimeOffset');
    serverTimeQuery
      .once('value')
      .then((snapshot) => {
        FirebaseManager.ServerOffset = snapshot.val();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static getServerLongTime() {
    let estimatedServerTimeMs = Date.now() + FirebaseManager.ServerOffset;
    return estimatedServerTimeMs;
  }

  static signOut() {
    // Log out
    FirebaseManager.auth().signOut();
  }

  static uploadImageTo(path, imgData, completion: (string?, error?) => void) {
    let storageRef = firebase.storage().ref();
    let imageRef = storageRef.child(path);

    imageRef.putString(imgData, 'data_url')
      .then((snapshot) => {
        // get download url
        imageRef.getDownloadURL().then((url) => {
          console.log('url: ' + url);

          completion(url);
        }).catch((err) => {
          console.log(err);

          completion(null, err);
        });
      })
      .catch((err) => {
        console.log(err);

        completion(null, err);
      });
  }

}
