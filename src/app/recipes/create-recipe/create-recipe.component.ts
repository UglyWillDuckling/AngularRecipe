import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {RecipeService} from "../../shared/recipe.service";
import {Recipe} from "../recipe";

@Component({
    selector: 'rb-create-recipe',
    templateUrl: './create-recipe.component.html',
    styles: [
        'span { min-width: 100px;  display: inline-block; }'
    ]
})
export class CreateRecipeComponent {
    @ViewChild('recipeForm') recipeForm:ElementRef;

    constructor(public recipeService:RecipeService) {}

    saveRecipe(name:string, description:string, image:string) {
        if(name && description) {
            this.recipeService.getRecipes().push(
                new Recipe(name, description, 'image', []));
            this.resetInputs();
        }
    }

    resetInputs() {
        let inputs =this.recipeForm.nativeElement.querySelectorAll('input');
        for(let i=0; i<inputs.length; i++) {
            inputs[i].value = '';
        }
    }
}
