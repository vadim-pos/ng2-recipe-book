import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { Ingredient } from '../../../models/ingredient.model';
import { ShoppingListService } from '../../../services/shopping-list.service';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
    @ViewChild('f') shoppingListForm:NgForm;
    subscription:Subscription;
    editMode:boolean = false;
    editedItemIndex:number;
    editedItem:Ingredient;

    constructor(private shoppingListService:ShoppingListService) {}

    ngOnInit() {
        this.subscription = this.shoppingListService.startedEditing.
            subscribe(
                (index:number) => {
                    this.editedItemIndex = index;
                    this.editMode = true;
                    this.editedItem = this.shoppingListService.getIngredient(index);
                    this.shoppingListForm.setValue({
                        name: this.editedItem.name,
                        amount: this.editedItem.amount
                    });
                }
            );
    }

    onAddItem(form:NgForm) {
        const value = form.value;
        const newIngredient = new Ingredient(value.name, value.amount);
        
        if (this.editMode) {
            this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
        } else {
            this.shoppingListService.addIngredient(newIngredient);
        }

        this.editMode = false;
        form.reset();
    }

    onDelete() {
        this.shoppingListService.deleteIngredient(this.editedItemIndex);
        this.onClear();
    }

    onClear() {
        this.editMode = false;
        this.shoppingListForm.reset();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
