import {Recipe} from "../recipes";

export class RecipeService {
    recipes:Recipe[] =[];
    selectedRecipe:Recipe;

    constructor() {
        this.recipes = [
            new Recipe('Schnitzel', 'Very tasty', 'http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg', []),
            new Recipe('Summer Salad', 'Okayish', 'http://jetspizza.com/dbphotos/display/c161462910486f60cf38484ecf458adf/664/410', []),
        ];
        //TODO load recipes from backend
    }

    getRecipes() {
        return this.recipes;
    }

    addRecipe(recipe:Recipe) {
        this.recipes.push(recipe);
    }

    removeRecipe(index:number) {
        this.recipes.slice(index, 1);
    }

    selectRecipe(recipe:Recipe) {
        this.selectedRecipe = recipe;
    }

    getSelectedRecipe () {
        return this.selectedRecipe;
    }
}