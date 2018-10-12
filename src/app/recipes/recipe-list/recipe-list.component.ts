import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('A Test Recipe', 'This is simply test', 'https://upload.wikimedia.org/wikipedia/commons/a/ac/HK_Sheung_Wan_Hillier_Street_lunch_food_Satay_egg_rice_July-2012.JPG'),
     // tslint:disable-next-line:max-line-length
    new Recipe('Another Test Recipe', 'This is simply test', 'https://upload.wikimedia.org/wikipedia/commons/a/ac/HK_Sheung_Wan_Hillier_Street_lunch_food_Satay_egg_rice_July-2012.JPG')

  ];

  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
