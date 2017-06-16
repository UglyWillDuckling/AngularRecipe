import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import { Recipe } from '../recipe';
import {RecipeService} from "../../shared/recipe.service";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
    @Input() recipes: Recipe[];
    @Output() recipeSelected = new EventEmitter();

    constructor(public recipeService:RecipeService) {}

    ngOnInit() {
        this.recipes = this.recipeService.getRecipes()
    }

    onSelected(recipe: Recipe) {
        this.recipeSelected.emit(recipe);
        this.recipeService.selectRecipe(recipe);
    }
}
