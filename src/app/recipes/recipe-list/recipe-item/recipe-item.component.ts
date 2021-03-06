import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipes } from '../../recipes.model'

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input('recipeIn') recipe: Recipes;
  @Output('recipeSelectedOut') recipeSelected = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  onSelected(){
    this.recipeSelected.emit();
  }

}
