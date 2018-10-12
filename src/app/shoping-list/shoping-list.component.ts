import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Bananas', 7)
  ];

  constructor() { }

  ngOnInit() {
  }
  onIngredinetAdded(ingredient: Ingredient) {
      this.ingredients.push(ingredient);
  }
}
