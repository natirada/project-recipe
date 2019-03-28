import { Component } from '@angular/core';
import { RecipeService } from '../../recipes/recipes.service';
import { AuthService } from '../../auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    constructor(private recipeservice: RecipeService,
                private auth: AuthService) {
                    console.log(this.auth.isAuthenticated());
                }

    onSaveData() {
        this.recipeservice.saveRecipes();
    }

    onLoadData() {
        this.recipeservice.loadRecipes();
    }

    onLogout() {
        this.auth.logoutUser();
    }

    ifAuthenticated() {
        return this.auth.isAuthenticated();
    }
}
