import { Component, Input } from '@angular/core';
import {Recipe} from './recipe';

@Component({
  selector: 'rb-recipes',
  templateUrl: './recipes.component.html'
})
export class RecipesComponent  {
  @Input() createRecipe = false;
    openCreate() {
        this.createRecipe = !this.createRecipe;
    }
}
