import { Component, OnInit, Input} from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipes.service';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() myRecipe: Recipe;
  @Input() id: number;


  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }
  onSelected() {
    this.recipeService.recipeSelctor.emit(this.myRecipe);
  }
}
