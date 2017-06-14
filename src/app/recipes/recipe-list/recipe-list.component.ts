import {Component, EventEmitter, Output} from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeItemComponent } from './recipe-item.component';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent {
    recipes: Recipe[] = [];
    @Output() recipeSelected = new EventEmitter();
    recipe = new Recipe('Dummy', 'Dummy', 'https://coolinarika-cdn.azureedge.net/image/' +
        'jogurt-sa-hrskavim-sjemenkama-6fe070031f77f926d0212739da2d20fb_header.jpg?v=14');

    onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
}
}
