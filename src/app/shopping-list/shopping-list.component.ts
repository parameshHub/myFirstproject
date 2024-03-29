import { Component, OnInit } from '@angular/core';
import { Ingrdient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients:Ingrdient[]=[new Ingrdient("Apple",5),new Ingrdient("Tomatoes",10)]
  constructor() { }

  ngOnInit(): void {
  }
  onIngredientAdded(ingredient:Ingrdient){
    this.ingredients.push(ingredient);
  }
}
