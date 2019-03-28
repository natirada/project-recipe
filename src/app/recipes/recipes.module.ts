import { NgModule } from '@angular/core';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipesRoutingModule } from './recipes-routering.module';
import { AppRoutingMoudle } from '../app-routing.moudle';
import { SharedModule } from '../Shared/shared.module';

@NgModule({
    declarations:[
        RecipesComponent,
        RecipeDetailComponent,
        RecipeEditComponent,
        RecipeListComponent,
        RecipeItemComponent,
        RecipeStartComponent
    ],

    imports: [ CommonModule , ReactiveFormsModule ,RecipesRoutingModule ,SharedModule ]
})
export class RecipeModule {}