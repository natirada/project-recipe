import { HttpClient, HttpParams } from '@angular/common/http';
import { Recipe } from '../recipes/recipe.model';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
   constructor(private httpClient: HttpClient,
               private auth: AuthService) {}

   saveData(recipes: Recipe[]) {
    const token = this.auth.getToken();
     return this.httpClient.put('https://ng-recipe-project-b4fcf.firebaseio.com/data.json', recipes, {
         observe: 'body',
         params: new HttpParams().set('auth',token)
     });
   }

   getData() {
       const token = this.auth.getToken();
       return this.httpClient.get<Recipe []>('https://ng-recipe-project-b4fcf.firebaseio.com/data.json?auth=' + token
       ).map(
           (recipes) => {
               for (let recipe of recipes) {
                   if (recipe['ingredients'] != null) {
                    recipe['ingredients'] = [];
                   }
               }
               return recipes;
           }
       );
   }
}