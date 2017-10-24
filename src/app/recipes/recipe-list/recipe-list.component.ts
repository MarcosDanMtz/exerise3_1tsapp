import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipes } from '../recipes.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipes>();
  recipes: Recipes[] = [
    new Recipes('Name recipe', 'Description testing for the recipe', 'https://myrecipehampers.files.wordpress.com/2013/04/mrh-square-logo.png'),
    new Recipes('Name recipe22222', 'Description testing for the recipe2222', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')

  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipes){
    this.recipeWasSelected.emit(recipe);
  }

}
