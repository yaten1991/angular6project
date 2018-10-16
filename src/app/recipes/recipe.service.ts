import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShopingListService } from '../shoping-list/shoping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        // tslint:disable-next-line:max-line-length
        new Recipe('A Test Recipe',
            'This is simply test',
            'https://upload.wikimedia.org/wikipedia/commons/a/ac/HK_Sheung_Wan_Hillier_Street_lunch_food_Satay_egg_rice_July-2012.JPG',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        // tslint:disable-next-line:max-line-length
        new Recipe('Another Test Recipe',
            'This is simply test',
            'https://upload.wikimedia.org/wikipedia/commons/a/ac/HK_Sheung_Wan_Hillier_Street_lunch_food_Satay_egg_rice_July-2012.JPG',
            [
                new Ingredient('Bread', 20),
                new Ingredient('Bun', 17)
            ])
    ];

    constructor(private slService: ShopingListService) { }

    getRecipes() {
        return this.recipes.slice();
    }
    addIngredientsToShopingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}

