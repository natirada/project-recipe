import { NgModule } from '@angular/core';
import { Routes , RouterModule, PreloadAllModules } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './core/home/home.component';

const appRouter: Routes = [
    {path: '' , component: HomeComponent},
    {path: 'recipe', loadChildren: './recipes/recipes.module#RecipeModule' },
    {path: 'shopping-list' , component: ShoppingListComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(appRouter , {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})

export class AppRoutingMoudle {}