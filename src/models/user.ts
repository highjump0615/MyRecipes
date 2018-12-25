import {BaseModel} from "./base-model";
import {FirebaseManager} from "../helpers/firebase-manager";
import DataSnapshot = firebase.database.DataSnapshot;
import {Cuisine} from "./cuisine";

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

  // cuisines
  static TABLE_NAME_FAVOURITE_CUISINE = 'userFavouriteCuisines';
  static TABLE_NAME_ALLERGY = 'userAllergies';
  static TABLE_NAME_DIET = 'userDiets';
  static TABLE_NAME_DISLIKE = 'userDislikes';


  email = '';
  firstName = '';
  lastName = '';
  desc = '';
  photoUrl = '';

  favouriteCuisines: any;
  allergies: any;
  diets: any;
  dislikes: any;

  fetchCuisineCount = 0;
  fetchedCuisineCount = 0;


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

    this.addDictitem(dict, User.FIELD_PHOTO, this.photoUrl);
    this.addDictitem(dict, User.FIELD_DESC, this.desc);

    return dict;
  }

  fullName() {
    return this.firstName + ' ' + this.lastName;
  }

  //
  // cuisines
  //

  /**
   * add or remove favourite cuisine
   * @param data
   * @param add
   */
  addFavouriteCuisine(data: Cuisine, add = true) {
    let dbRef = FirebaseManager.ref()
      .child(User.TABLE_NAME_FAVOURITE_CUISINE)
      .child(this.id);

    if (add) {
      // add to db
      dbRef.child(data.id).set(true);

      // init array
      if (!this.favouriteCuisines) {
        this.favouriteCuisines = [];
      }

      if (!data.isInitData()) {
        this.favouriteCuisines.push(data.id);
      }
    }
  }

  /**
   * add or remove allergy
   * @param data
   * @param add
   */
  addAllergy(data: Cuisine, add = true) {
    let dbRef = FirebaseManager.ref()
      .child(User.TABLE_NAME_ALLERGY)
      .child(this.id);

    if (add) {
      // add to db
      dbRef.child(data.id).set(true);

      // init array
      if (!this.allergies) {
        this.allergies = [];
      }

      if (!data.isInitData()) {
        this.allergies.push(data.id);
      }
    }
  }

  /**
   * add or remove diet
   * @param data
   * @param add
   */
  addDiet(data: Cuisine, add = true) {
    let dbRef = FirebaseManager.ref()
      .child(User.TABLE_NAME_DIET)
      .child(this.id);

    if (add) {
      // add to db
      dbRef.child(data.id).set(true);

      // init array
      if (!this.diets) {
        this.diets = [];
      }

      if (!data.isInitData()) {
        this.diets.push(data.id);
      }
    }
  }

  /**
   * add or remove dislike
   * @param data
   * @param add
   */
  addDislike(data: Cuisine, add = true) {
    let dbRef = FirebaseManager.ref()
      .child(User.TABLE_NAME_DISLIKE)
      .child(this.id);

    if (add) {
      // add to db
      dbRef.child(data.id).set(true);

      // init array
      if (!this.dislikes) {
        this.dislikes = [];
      }

      if (!data.isInitData()) {
        this.dislikes.push(data.id);
      }
    }
  }

  /**
   * fetch cuisines data
   * @param completion
   */
  fetchCuisines(completion: () => void) {
    this.fetchCuisineCount = 0;
    this.fetchedCuisineCount = 0;

    this.fetchCuisineCount++;
    this.fetchFavouriteCuisines(() => {
      this.onFetchedCuisines(completion)
    });

    this.fetchCuisineCount++;
    this.fetchAllergies(() => {
      this.onFetchedCuisines(completion)
    });

    this.fetchCuisineCount++;
    this.fetchDiets(() => {
      this.onFetchedCuisines(completion)
    });

    this.fetchCuisineCount++;
    this.fetchDislikes(() => {
      this.onFetchedCuisines(completion)
    });
  }

  onFetchedCuisines(completion: () => void) {
    this.fetchedCuisineCount++;

    if (this.fetchedCuisineCount == this.fetchCuisineCount) {
      completion();
    }
  }

  fetchFavouriteCuisines(completion: () => void) {
    const that = this;

    let dbRef = FirebaseManager.ref()
      .child(User.TABLE_NAME_FAVOURITE_CUISINE)
      .child(this.id);

    dbRef.once('value')
      .then((snapshot) => {
        if (snapshot.hasChildren()) {
          that.favouriteCuisines = [];
        }

        snapshot.forEach(function(child) {
          that.favouriteCuisines.push(child.key);
        });

        completion();
      })
      .catch((err) => {
        completion();
      });
  }

  fetchAllergies(completion: () => void) {
    const that = this;

    let dbRef = FirebaseManager.ref()
      .child(User.TABLE_NAME_ALLERGY)
      .child(this.id);

    dbRef.once('value')
      .then((snapshot) => {
        if (snapshot.hasChildren()) {
          that.allergies = [];
        }

        snapshot.forEach(function(child) {
          that.allergies.push(child.key);
        });

        completion();
      })
      .catch((err) => {
        completion();
      });
  }

  fetchDiets(completion: () => void) {
    const that = this;

    let dbRef = FirebaseManager.ref()
      .child(User.TABLE_NAME_DIET)
      .child(this.id);

    dbRef.once('value')
      .then((snapshot) => {
        if (snapshot.hasChildren()) {
          that.diets = [];
        }

        snapshot.forEach(function(child) {
          that.diets.push(child.key);
        });

        completion();
      })
      .catch((err) => {
        completion();
      });
  }

  fetchDislikes(completion: () => void) {
    const that = this;

    let dbRef = FirebaseManager.ref()
      .child(User.TABLE_NAME_DISLIKE)
      .child(this.id);

    dbRef.once('value')
      .then((snapshot) => {
        if (snapshot.hasChildren()) {
          that.dislikes = [];
        }

        snapshot.forEach(function(child) {
          that.dislikes.push(child.key);
        });

        completion();
      })
      .catch((err) => {
        completion();
      });
  }

  // setFavourites(data) {
  //   this.favourites = data;
  //   this.favouritesDone = true;
  //
  //   // save to db
  //   this.saveToDatabaseWithField(
  //     User.FIELD_FAVOURITE,
  //     data
  //   );
  //   this.saveToDatabaseWithField(
  //     User.FIELD_FAVOURITE_DONE,
  //     true
  //   );
  // }
  //
  // setAllergies(data) {
  //   this.allergies = data;
  //   this.allergiesDone = true;
  //
  //   // save to db
  //   this.saveToDatabaseWithField(
  //     User.FIELD_ALLERGY,
  //     data
  //   );
  //   this.saveToDatabaseWithField(
  //     User.FIELD_ALLERGY_DONE,
  //     true
  //   );
  // }
  //
  // setDiets(data) {
  //   this.diets = data;
  //
  //   // save to db
  //   this.saveToDatabaseWithField(
  //     User.FIELD_DIET,
  //     data
  //   );
  // }
  //
  // setDislikes(data) {
  //   this.dislikes = data;
  //   this.dislikesDone = true;
  //
  //   // save to db
  //   this.saveToDatabaseWithField(
  //     User.FIELD_DISLIKE,
  //     data
  //   );
  //   this.saveToDatabaseWithField(
  //     User.FIELD_DISLIKE_DONE,
  //     true
  //   );
  // }
}
