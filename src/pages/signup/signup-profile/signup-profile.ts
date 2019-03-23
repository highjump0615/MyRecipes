import { Component, ViewChild, ElementRef } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  MenuController,
  ToastController,
  AlertController,
  LoadingController,
  Platform
} from 'ionic-angular';

import { SignupFavouritePage } from '../signup-favourite/signup-favourite'
import { BaseLandingPage } from '../../BaseLandingPage';
import { User } from '../../../models/user';
import {FirebaseManager} from "../../../helpers/firebase-manager";
import {SignupEmailPage} from "../signup-email/signup-email";
import {Utils} from "../../../helpers/utils";

/**
 * Generated class for the SignupProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup-profile',
  templateUrl: 'signup-profile.html',
})
export class SignupProfilePage extends BaseLandingPage {

  email = '';
  password = '';

  firstName = '';
  lastName = '';
  description = '';

  imgPhoto = '';
  imgPhotoUrl = '';

  @ViewChild('file') inputFile: ElementRef;
  @ViewChild('desc') textDesc: ElementRef;

  FROM_SIGNUP = 0;
  FROM_PROFILE = 1;

  title = "Sign Up";
  type = this.FROM_SIGNUP;

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public navParams: NavParams,
    public plt: Platform
  ) {
    super(navCtrl, menuCtrl, toastCtrl, loadingCtrl);

    this.email = navParams.get(SignupEmailPage.PARAM_EMAIL);
    this.password = navParams.get(SignupEmailPage.PARAM_PASSWORD);

    // fill info
    const user = User.currentUser;
    if (user) {
      this.firstName = user.firstName;
      this.lastName = user.lastName;
      this.description = user.desc;

      this.imgPhotoUrl = user.photoUrl ? user.photoUrl : '../../../assets/imgs/default_user.png';
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupProfilePage');

    // check signup or edit profile
    if (User.currentUser) {
      this.title = "Edit Profile";
      this.type = this.FROM_PROFILE;
    }
  }

  adjustTextarea(event: any): void {
    let textarea: any		= event.target;
    textarea.style.overflow = 'hidden';
    textarea.style.height 	= 'auto';
    textarea.style.height 	= textarea.scrollHeight + 'px';
    return;
  }

  /**
   * next button
   * @param event
   */
  onButNext(event) {
    //
    // check validation
    //
    if (!this.firstName) {
      let alert = this.alertCtrl.create({
        title: 'First Name Invalid',
        message: 'First name cannot be empty',
        buttons: ['Ok']
      });
      alert.present();

      return;
    }

    if (!this.lastName) {
      let alert = this.alertCtrl.create({
        title: 'Last Name Invalid',
        message: 'Last name cannot be empty',
        buttons: ['Ok']
      });
      alert.present();

      return;
    }


    if (!User.currentUser) {
      this.showLoadingView();

      // do signup
      FirebaseManager.auth().createUserWithEmailAndPassword(
        this.email,
        this.password
      ).then((res) => {
        console.log(res);

        let u = res.user;

        if (!u) {
          return;
        }

        // set user
        let userNew = new User(u.uid);

        // save user info
        userNew.email = this.email;

        User.currentUser = userNew;

        this.uploadImageAndSetupUserInfo();

      }).catch((err) => {
        console.log(err);

        this.showLoadingView(false);

        // show error alert
        let alert = this.alertCtrl.create({
          title: 'Signup Failed',
          message: err.message,
          buttons: ['Ok']
        });
        alert.present();
      });
    }
    else {
      this.uploadImageAndSetupUserInfo();
    }
  }

  uploadImageAndSetupUserInfo() {

    if (this.imgPhoto) {
      // show loading view
      this.showLoadingView();

      // upload photo
      let user = User.currentUser;
      let path = 'users/' + user.id + '.png';

      FirebaseManager.uploadImageTo(
        path,
        this.imgPhoto,
        (downloadURL, error) => {
          if (error) {
            // failed to upload
            this.showLoadingView(false);
            return;
          }

          User.currentUser.photoUrl = downloadURL;
          this.saveUserInfo();
        });
    }
    else {
      this.saveUserInfo();
    }
  }

  saveUserInfo() {
    let user = User.currentUser;

    // save info
    user.firstName = this.firstName;
    user.lastName = this.lastName;
    user.desc = this.description;

    user.saveToDatabase();

    // hide loading view
    this.showLoadingView(false);

    if (this.type == this.FROM_SIGNUP) {
      // go to signup favourite page
      this.navCtrl.push(SignupFavouritePage);
    }
    else {
      // back to previous page
      this.navCtrl.pop();
    }
  }

  onFileSelected(event) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      console.log(file);

      const reader = new FileReader();
      reader.onload = e => {
        this.imgPhoto = reader.result;

        console.log(this.imgPhoto);
      };

      reader.readAsDataURL(file);
    }
  }

  onButPhoto() {
    // browser
    // if (Utils.isPlatformWeb(this.plt)) {
      this.inputFile.nativeElement.click();
      // return;
    // }

    /*
    // native app
    let options = {
      maximumImagesCount: 1,
      outputType: OutputType.DATA_URL
    };

    this.imagePicker.hasReadPermission().then(
      (result) => {
        if(result == false){
          // no callbacks required as this opens a popup which returns async
          this.imagePicker.requestReadPermission();
        }
        else if(result == true){
          this.imagePicker.getPictures(options).then(
            (results) => {
              if (results.length <= 0) {
                return;
              }

              this.imgPhoto = 'data:image/jpeg;base64,' + results[0];

              console.log(this.imgPhoto);

              // this.uploadImageToFirebase(results[i]);
            }, (err) => console.log(err)
          );
        }
      }, (err) => {
        console.log(err);
      });
      */
  }
}
