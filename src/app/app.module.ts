import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
// import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { DropdownDirective } from './dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { appRouting } from './app.routes';
import { RecipeStartComponent } from './recipes/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
// import { RecipesModule } from './recipes/recipes.module';
import { HomeComponent } from './home.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        DropdownDirective,
        HomeComponent,
        // RecipesComponent,
        // RecipeListComponent,
        // RecipeItemComponent,
        // RecipeDetailComponent,
        // RecipeStartComponent,
        // RecipeEditComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        appRouting,
        // ReactiveFormsModule,
        ShoppingListModule
        // RecipesModule
    ],
    providers: [ShoppingListService],
    bootstrap: [AppComponent]
})
export class AppModule { }
