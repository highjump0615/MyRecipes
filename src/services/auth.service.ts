import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth'
import AuthProvider = firebase.auth.AuthProvider;

@Injectable()
export class AuthService {
  private user: firebase.User;

  constructor(public afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(user => {
      this.user = user;
    });
  }

  signInWithEmail(credentials) {
    console.log('Sign in with email');
    return this.afAuth.auth.signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    );
  }

}
