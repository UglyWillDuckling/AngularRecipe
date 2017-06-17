import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe';
import {RecipeService} from '../../shared/recipe.service';
import {ShoppingListService} from "../../shared/shopping-list.service";

@Component({
    selector: 'rb-recipe-detail',
    templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {
    @Input() selectedRecipe: Recipe;

    constructor(public recipeService: RecipeService, private sls: ShoppingListService) {}

    ngOnInit() {
        this.selectedRecipe = this.recipeService.getSelectedRecipe()
    }

    deleteRecipe(recipe) {
        this.recipeService.removeRecipe(recipe);
    }

    addToShoppingList() {
        this.sls.addItems( this.recipeService.getSelectedRecipe().ingredients);
    }
}
