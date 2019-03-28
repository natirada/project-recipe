import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingMoudle } from '../app-routing.moudle';
import { SharedModule } from '../Shared/shared.module';
import { ShoppingListService } from '../shopping-list/shoppinglist.service';
import { RecipeService } from '../recipes/recipes.service';
import { DataStorageService } from '../Shared/data-storage.service';
import { AuthService } from '../auth/auth.service';

@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent
    ],
    imports: [AppRoutingMoudle , SharedModule ],
    exports: [HeaderComponent],
    providers: [ShoppingListService, RecipeService, DataStorageService, AuthService ]
})
export class CoreModule {}