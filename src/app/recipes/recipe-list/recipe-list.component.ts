import {Component, EventEmitter, Output, Input} from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent {
    @Input() recipes: Recipe[];
    @Output() recipeSelected = new EventEmitter();

    onSelected(recipe: Recipe) {
        this.recipeSelected.emit(recipe);
    }
}
