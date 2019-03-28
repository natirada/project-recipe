import * as ShoppingListAction from './shopping-list.action';
import { Ingredient } from '../../Shared/ingredient.model';

const initialState = {
    ingredinets: [
        new Ingredient('Apple', 5),
        new Ingredient('Tomato', 12)
    ]
};

export function shoppingListReducer (state = initialState , action: ShoppingListAction.
    shoppingListAction) {

    switch (action.type) {
        case ShoppingListAction.ADD_INGREDINET:
          return {
              ...state,
              ingredients: [...state.ingredinets, action.payload ]
          };
          default:
           return state;
    }
}
