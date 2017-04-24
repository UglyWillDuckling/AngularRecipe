

// selected item component //
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

import { Recipe } from '../recipe';


@Component({
  selector: 'rb-recipe-item',
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent {
    @Input() recipe: Recipe;
    recipeId: number;
}


