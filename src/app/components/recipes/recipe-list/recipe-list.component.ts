import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Recipe } from '../../../models/recipe.model';
import { RecipeService } from '../../../services/recipe.service';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit, OnDestroy {
    subscription:Subscription;

    constructor(
        private recipeService:RecipeService,
        private router:Router,
        private route:ActivatedRoute,
    ) {}

    recipes: Recipe[];

    ngOnInit() {
        this.subscription = this.recipeService.recipesUpdated.subscribe(
            (recipes:Recipe[]) => {
                this.recipes = recipes;
            }
        );
        this.recipes = this.recipeService.getRecipes();
    }

    onNewRecipe() {
        this.router.navigate(['new'], {relativeTo: this.route});
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
