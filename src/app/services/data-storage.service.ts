import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { RecipeService } from './recipe.service';
import { Recipe } from '../models/recipe.model';

@Injectable()
export class DataStorageService {
    constructor(private recipeService:RecipeService, private http:Http) {}

    storeRecipes() {
        return this.http.put('https://ng4-recipe-book.firebaseio.com/recipes.json', this.recipeService.getRecipes());
    }

    getRecipes() {
        this.http.get('https://ng4-recipe-book.firebaseio.com/recipes.json')
            .map((response:Response) => {
                const recipes:Recipe[] = response.json();
                for (let recipe of recipes) {
                    if (!recipe['ingredients']) {
                        recipe['ingredients'] = [];
                    }
                }
                return recipes;
            })
            .subscribe((recipes:Recipe[]) => {
                this.recipeService.setRecipes(recipes);
            }
        );
    }
}
