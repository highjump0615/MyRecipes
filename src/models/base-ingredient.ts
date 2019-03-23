import {BaseModel} from './base-model';
import DataSnapshot = firebase.database.DataSnapshot;
import {Ingredient} from './ingredient';
import {FirebaseManager} from '../helpers/firebase-manager';

export class BaseIngredient extends BaseModel {

  static FIELD_INGREDIENT = 'ingredients';

  ingredientIds = [];
  ingredients: Array<Ingredient> = [];

  constructor(snapshot?: DataSnapshot) {

    super(snapshot);

    if (snapshot) {
      const info = snapshot.val();

      // set ingredients
      this.ingredientIds = info[BaseIngredient.FIELD_INGREDIENT];
    }
  }

  toDictionary() {
    const dict = super.toDictionary();

    // ingredients
    const dictIngs = [];
    for (const i of this.ingredients) {
      dictIngs[i.id] = i.quantity;
    }
    dict[BaseIngredient.FIELD_INGREDIENT] = dictIngs;

    return dict;
  }

  /**
   * fetch ingredients data
   */
  fetchIngredient(): Promise<BaseIngredient> {

    // get current index
    const nIndex = this.ingredients.length;

    if (nIndex >= Object.keys(this.ingredientIds).length) {
      // all ingredients are fetched
      return Promise.resolve(this);
    }

    const ingId = Object.keys(this.ingredientIds)[nIndex];

    const dbRef = FirebaseManager.ref()
      .child(Ingredient.TABLE_NAME)
      .child(ingId);

    const that = this;

    return dbRef.once('value')
      .then((snapshot) => {
        if (snapshot.exists()) {
          const ingNew = new Ingredient(snapshot);
          ingNew.quantity = that.ingredientIds[ingId];

          that.ingredients.push(ingNew);
        }

        return that.fetchIngredient();
      });
  }
}
