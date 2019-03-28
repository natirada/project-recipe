import { Action } from '@ngrx/store';
import { Ingredient } from '../../Shared/ingredient.model';

export const ADD_INGREDINET = 'ADD_INGREDIENT';

export class AddIngredient implements Action {
    readonly type = ADD_INGREDINET ;
    payload: Ingredient;
}

export type shoppingListAction = AddIngredient ;
