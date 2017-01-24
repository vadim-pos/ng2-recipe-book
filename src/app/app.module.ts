import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { DropdownDirective } from './dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRouting } from './app.routes';
import { RecipeStartComponent } from './recipes/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { ShoppingListModule } from './shopping-list/shopping-list.module';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        RecipesComponent,
        RecipeListComponent,
        RecipeItemComponent,
        RecipeDetailComponent,
        DropdownDirective,
        RecipeStartComponent,
        RecipeEditComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        AppRouting,
        ReactiveFormsModule,
        ShoppingListModule
    ],
    providers: [ShoppingListService],
    bootstrap: [AppComponent]
})
export class AppModule { }
