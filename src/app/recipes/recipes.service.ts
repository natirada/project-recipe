import { Recipe } from './recipe.model';
import { EventEmitter, Injectable, OnInit} from '@angular/core';
import { Ingredient } from '../Shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shoppinglist.service';
import { Subject } from 'rxjs';
import { DataStorageService } from '../Shared/data-storage.service';
import { Response } from '@angular/http';

@Injectable()
export class RecipeService {
    recipeSelctor = new EventEmitter<Recipe>();
    recipeChanged = new Subject<Recipe[]>();
    Recipes: Recipe[] = [];

      constructor(private SLService: ShoppingListService,
                  private dataStorageService: DataStorageService) { 
                    // this.dataStorageService.getData().
                    // subscribe(
                    //     (recipes: Recipe[]) => {
                    //         this.Recipes = recipes;
                    //         this.recipeChanged.next(this.Recipes);
                    //     },
                    //     (erorr) => console.log(erorr)
                    // );
                }

      loadRecipes() {
        this.dataStorageService.getData().
        subscribe(
            (recipes: Recipe[]) => {
                this.Recipes = recipes;
                this.recipeChanged.next(this.Recipes);
            },
            (erorr) => console.log(erorr)
        );
      }
      saveRecipes() {
        this.dataStorageService.saveData(this.Recipes.slice()).
        subscribe(
            (response) => console.log(response),
            (error) => console.log(error)
        );
      }
      RemoveIngredient(indexRecipe: number, indexIngredient: number) {
          this.Recipes[indexRecipe].ingredients.splice(indexIngredient, 1);
          this.recipeChanged.next(this.Recipes);
      }
      RemoveRecipe(index: number) {
          this.Recipes.splice(index, 1);
          this.recipeChanged.next(this.Recipes);
      }
      AddRecipe(newRecipe: Recipe) {
          this.Recipes.push(newRecipe);
          this.recipeChanged.next(this.Recipes);
      }
      UpdateRecipe(index: number , updateRecipe: Recipe) {
          this.Recipes[index] = updateRecipe;
          this.recipeChanged.next(this.Recipes);
      }
      GetRecipeById(id: number) {
          return this.Recipes[id];
      }

      GetRecipe(index: number) {
        return this.Recipes[index];
      }
      GetRecipes() {
          return this.Recipes.slice();
      }

      AddToShoppingList(ingredients: Ingredient[] ) {
        this.SLService.AddIngredients(ingredients);
      }

}