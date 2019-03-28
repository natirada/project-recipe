import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Ingredient } from '../Shared/ingredient.model';
import { ShoppingListService } from './shoppinglist.service';
import { trigger, state, style, transition, animate, animation } from '@angular/animations';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  animations: [
    trigger('shoppingList', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }), animate(300)
      ]),
      transition('* => void', [
        animate(300,  style({
          opacity: 0,
          transform: 'translateX(100px)'
        }))
      ]),
    ])
  ]
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
   // this.shoppingListState = this.store.select('shoppingList');
   this.ingredients = this.shoppingListService.GetIngredients();
    this.shoppingListService.ingredientChanged.
    subscribe(
      (updateIngredients: Ingredient[]) => {
        this.ingredients = updateIngredients;
      }
    );
  }

  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }

}
