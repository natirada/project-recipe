import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipes.service';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/Shared/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  editMood = false;
  recipeForm: FormGroup;
  constructor(private routerActive: ActivatedRoute,
              private router: Router,
              private recipeService: RecipeService) { }

  ngOnInit() {
    this.routerActive.params.
    subscribe(
      (params: Params) => {
       this.editMood = params['id'] != null ;
       console.log(this.editMood);
       if (this.editMood === true) {
         this.id = params['id'];
       }
       this.initForm();
      }
    );
  }

  onSubmit() {
    const name = this.recipeForm.value.name;
    const description = this.recipeForm.value.description;
    const imagePath = this.recipeForm.value.imagepath;
    const ingredients: Ingredient[] = this.recipeForm.value.ingredients ;
    const recipe = new Recipe(name, description, imagePath, ingredients);

    if (this.editMood ===  true) {
      this.recipeService.UpdateRecipe(this.id, recipe);
    } else {
      this.recipeService.AddRecipe(recipe);
    }
    this.recipeForm.reset();
    this.router.navigate(['../'], {relativeTo: this.routerActive });
  }
  private initForm() {
    let recipeName = '';
    let recipePath = '';
    let description = '';
    let recipeIngredients = new FormArray([]);
    if (this.editMood) {
      const recipe = this.recipeService.GetRecipe(this.id);
      recipeName = recipe.name;
      recipePath = recipe.imagePath;
      description = recipe.description;
      if (recipe['ingredients']) {
          for(let ingredient of recipe.ingredients) {
            recipeIngredients.push(
              new FormGroup({
                'name': new FormControl(ingredient.name, Validators.required),
                'amount': new FormControl(ingredient.amount, [Validators.required , Validators.pattern(/^[1-9]+[0-9]*$/)])
              })
            )
          }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagepath': new FormControl(recipePath, Validators.required),
      'description': new FormControl(description, Validators.required),
      'ingredients': recipeIngredients
    });
  }

  getIngredients() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [Validators.required , Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    );
  }

  onClickCancel() {
    this.router.navigate(['../'], {relativeTo: this.routerActive });
  }

  onClickX(index: number) {
      (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }
}
