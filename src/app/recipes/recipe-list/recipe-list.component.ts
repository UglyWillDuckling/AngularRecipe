import {Component, EventEmitter, Output} from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeItemComponent } from './recipe-item.component';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent {
    recipes: Recipe[] = [
        new Recipe('Schnitzel', 'Very tasty', 'http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg', []),
        new Recipe('Summer Salad', 'Okayish', 'http://jetspizza.com/dbphotos/display/c161462910486f60cf38484ecf458adf/664/410', []),
    ];
    @Output() recipeSelected = new EventEmitter();

    onSelected(recipe: Recipe) {
        this.recipeSelected.emit(recipe);
    }
}
