import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Recipe } from '../models/recipe.model';
import { Ingredient } from '../models/ingredient.model';
import { ShoppingListService } from '../services/shopping-list.service';

@Injectable()
export class RecipeService {
    recipesUpdated = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe(
            'Schnitzel',
            'A tasty Schnitzel - just awesome!',
            'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg',
            [new Ingredient('Pork', 2), new Ingredient('Apples', 3)]
        ),
        new Recipe(
            'Burger',
            'Great Burger!',
            'http://s.eatthis-cdn.com/media/images/ext/577273183/FRIDAYS-SMOKE-STACKED-BURGER.jpg',
            [new Ingredient('Bread', 2), new Ingredient('Meat', 1)]
        )
    ];

    constructor(private shoppingListService:ShoppingListService) {}

    getRecipes():Recipe[] {
        return this.recipes.slice();
    }

    setRecipes(recipes:Recipe[]) {
        this.recipes = recipes;
        this.recipesUpdated.next(this.recipes.slice());
    }

    addIngredientsToShoppingList(ingredients:Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    getRecipe(index:number) {
        return this.recipes[index];
    }

    addRecipe(recipe:Recipe) {
        this.recipes.push(recipe);
        this.recipesUpdated.next(this.recipes.slice());
    }

    updateRecipe(index:number, recipe:Recipe) {
        this.recipes[index] = recipe;
        this.recipesUpdated.next(this.recipes.slice());
    }

    deleteRecipe(index:number) {
        this.recipes.splice(index, 1);
        this.recipesUpdated.next(this.recipes.slice());
    }
}
