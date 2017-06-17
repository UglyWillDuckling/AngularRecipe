import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe';
import {RecipeService} from '../../shared/recipe.service';

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit{
  @Input() selectedRecipe: Recipe;

  constructor(public recipeService:RecipeService) {}

  ngOnInit() {
      this.selectedRecipe = this.recipeService.getSelectedRecipe()
  }

    deleteRecipe(recipe) {
      this.recipeService.removeRecipe(recipe);
    }
}
