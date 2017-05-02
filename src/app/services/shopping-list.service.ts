import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Ingredient } from '../models/ingredient.model';

@Injectable()
export class ShoppingListService {
    ingredientsUpdated = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    private ingredients:Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 4),
        new Ingredient('Potatoes', 7),
    ];

    getIngredients():Ingredient[] {
        return this.ingredients.slice();
    }

    getIngredient(index:number) {
        return this.ingredients[index];
    }

    addIngredient(ingredient:Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsUpdated.next(this.ingredients.slice());
    }

    addIngredients(ingredients:Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsUpdated.next(this.ingredients.slice());
    }

    updateIngredient(index:number, newIngredient:Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsUpdated.next(this.ingredients.slice());
    }

    deleteIngredient(index:number) {
        this.ingredients.splice(index, 1);
        this.ingredientsUpdated.next(this.ingredients.slice());
    }
}
