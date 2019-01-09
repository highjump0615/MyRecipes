import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ToastController } from 'ionic-angular';
import { RecipeDetailPage } from '../recipe-detail/recipe-detail';
import { BasePage } from '../BasePage';
import { AddRecipePage } from '../add-recipe/add-recipe';
import {Recipe} from "../../models/recipe";
import {FirebaseManager} from "../../helpers/firebase-manager";
import {User} from "../../models/user";

/**
 * Generated class for the MyRecipesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-recipes',
  templateUrl: 'my-recipes.html',
})
export class MyRecipesPage extends BasePage {

  // recipes
  recipes: Array<Recipe> = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController
  ) {
    super(navCtrl, menuCtrl, toastCtrl);

    // disable menu
    this.enableMenu(false);

    // fetch recipes
    const userCurrent = User.currentUser;
    const dbRef = FirebaseManager.ref();

    let query: any = dbRef.child(Recipe.TABLE_NAME)
      .orderByChild(Recipe.FIELD_USERID)
      .equalTo(userCurrent.id);

    query.once('value')
      .then((snapshot) => {
        console.log(snapshot);

        // clear
        const aryRecipe = [];

        snapshot.forEach(function(child) {
          const r = new Recipe(child);

          aryRecipe.push(r);

          console.log(child);
        });

        this.recipes = aryRecipe;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyRecipesPage');
  }

  onRecipeDetail() {
    // go to recipe detail page
    this.navCtrl.push(RecipeDetailPage);
  }

  onButNew() {
    // go to add recipe page
    this.navCtrl.push(AddRecipePage);
  }

}
