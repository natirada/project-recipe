import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ingredient } from 'src/app/Shared/ingredient.model';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe ;
  id: number;

  constructor(private recipeService: RecipeService,
              private routers: Router,
              private router: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.router.params['value'].id);
    this.id = this.router.params['value'].id;
    this.recipe = this.recipeService.GetRecipeById(this.id);
      this.router.params.
      subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.recipe = this.recipeService.GetRecipeById(this.id);
        }
      );
  }

  onClickEdit() {
      this.routers.navigate(['edit'], {relativeTo: this.router});
  }

  onClickDelete() {
    this.recipeService.RemoveRecipe(this.id);
    this.routers.navigate(['/'], {relativeTo: this.router});
  }
}
