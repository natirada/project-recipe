import { Ingredient } from '../Shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
    ingredientChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomato', 12),
      ];

    GetIngredients() {
        return this.ingredients.slice();
    }
    RemoveIngredient(index: number) {
      this.ingredients.splice(index, 1);
      this.ingredientChanged.next(this.ingredients.slice());
    }
    EditIngredient(index: number , ingredient: Ingredient) {
      this.ingredients[index] = ingredient;
      this.ingredientChanged.next(this.ingredients.slice());
    }
    GetIngredient(index: number) {
      return this.ingredients[index];
    }
    SetIngredients(ingred: Ingredient[]) {
      this.ingredients = ingred;
      this.ingredientChanged.next(this.ingredients.slice());
    }

    AddItem(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientChanged.next(this.ingredients.slice());
      }

    AddIngredients(ingredients: Ingredient[]) {
       for (const ingredient of ingredients) {
          this.ingredients.push(ingredient);
       }
       this.ingredientChanged.next(this.ingredients.slice());
    }
 }