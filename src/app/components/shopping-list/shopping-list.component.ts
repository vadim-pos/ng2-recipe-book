import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Ingredient } from '../../models/ingredient.model';
import { ShoppingListService } from '../../services/shopping-list.service';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
    ingredients:Ingredient[];
    private ingredientsSubscription:Subscription;

    constructor(private shoppingListService:ShoppingListService) {}

    ngOnInit() {
        this.ingredients = this.shoppingListService.getIngredients();
        this.ingredientsSubscription = this.shoppingListService.ingredientsUpdated.subscribe(
            (ingredients:Ingredient[]) => this.ingredients = ingredients
        );
    }

    onEditItem(index:number) {
        this.shoppingListService.startedEditing.next(index);
    }

    ngOnDestroy() {
        this.ingredientsSubscription.unsubscribe();
    }

}
