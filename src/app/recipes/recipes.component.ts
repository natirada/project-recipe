import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipes.service';
import { Unsubscribable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit, OnDestroy {
  RecipeSelected: Recipe;
  unsubscribe: Unsubscribable;
  constructor(private recipeService: RecipeService,
              private auth: AuthService) { }

  ngOnInit() {
    if (this.auth.isAuthenticated() === true ) {
      this.recipeService.loadRecipes();
    }
    this.unsubscribe = this.recipeService.recipeSelctor.
    subscribe(
      (recipe: Recipe) => {
        this.RecipeSelected = recipe;
      }
    );
  }

  ngOnDestroy() {
    this.unsubscribe.unsubscribe();
  }

}
