import { Component, Input } from '@angular/core';
import {Recipe} from './recipe';

@Component({
  selector: 'rb-recipes',
  templateUrl: './recipes.component.html'
})
export class RecipesComponent  {
  selectedRecipe: Recipe;
    recipes: Recipe[] = [
        new Recipe('Schnitzel', 'Very tasty', 'http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg', []),
        new Recipe('Summer Salad', 'Okayish', 'http://jetspizza.com/dbphotos/display/c161462910486f60cf38484ecf458adf/664/410', []),
    ];

  @Input() createRecipe = false;

    openCreate() {
        this.createRecipe = !this.createRecipe;
    }
}
