import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { Ingredient } from 'src/app/Shared/ingredient.model';
import {ShoppingListService } from '../shoppinglist.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit ,OnDestroy {
  @ViewChild('f') SpNgForm: NgForm;
  subscription: Subscription;
  editMood = false;
  editedItemIndex: number;
  ingredient: Ingredient;


  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing
    .subscribe(
      (index: number) => {
        this.editMood = true;
        this.editedItemIndex = index;
        this.ingredient = this.shoppingListService.GetIngredient(index);
        this.SpNgForm.setValue({
          'name': this.ingredient.name,
          'amount': this.ingredient.amount
        });
      }
    );
  }

  onSubmit(form: NgForm) {
    const data = form.value;
    const ingredient = new Ingredient(data.name, data.amount);
    if (this.editMood === false) {
      this.shoppingListService.AddItem(ingredient);
    } else {
      this.shoppingListService.EditIngredient(this.editedItemIndex, ingredient);
    }
    this.editMood = false;
    this.SpNgForm.reset();
  }
  onDelete() {
    this.onClear();
    this.shoppingListService.RemoveIngredient(this.editedItemIndex);
  }
  onClear() {
    this.SpNgForm.reset();
    this.editMood = false;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
