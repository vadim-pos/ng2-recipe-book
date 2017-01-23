import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';


import { Recipe } from '../recipe';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';

@Component({
    selector: 'rb-recipe-detail',
    templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {
    private recipeIndex: number;
    private subscription: Subscription;
    selectedRecipe: Recipe;

    constructor(private shoppingListService: ShoppingListService,
                private router: Router,
                private route: ActivatedRoute,
                private recipeService: RecipeService) { }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(
            (params: any) => {
                this.recipeIndex = params['id'];
                this.selectedRecipe = this.recipeService.getRecipe(this.recipeIndex);
            }
        );
    }
    onAddToShoppingList() {
        this.shoppingListService.addItems(this.selectedRecipe.ingredients);
    }
    onEdit() {
        this.router.navigate(['/recipes', this.recipeIndex, 'edit'])
    }
    onDelete() {
        this.recipeService.deleteRecipe(this.selectedRecipe);
        this.router.navigate(['/recipes']);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
