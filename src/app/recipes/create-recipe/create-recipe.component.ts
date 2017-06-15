import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {Recipe} from "../recipe";

@Component({
    selector: 'rb-create-recipe',
    templateUrl: './create-recipe.component.html',
    styles: [
        'span { min-width: 100px;  display: inline-block; }'
    ]
})
export class CreateRecipeComponent {
    @Input() recipes: Recipe[];
    @ViewChild('recipeForm') recipeForm:ElementRef;

    saveRecipe(name:string, description:string, image:string) {
        if(name && description) {
            this.recipes.push(
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
