import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes:Recipe[]=[new Recipe("A test recipes","test","https://toriavey.com/images/2011/01/TOA109_18-1-500x500.jpeg")];
@Output() recipeWasSelected=new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(rec:Recipe){
    this.recipeWasSelected.emit(rec);
  }

}
