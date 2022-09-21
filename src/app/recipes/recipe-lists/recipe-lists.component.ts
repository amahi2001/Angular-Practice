import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'
@Component({
  selector: 'app-recipe-lists',
  templateUrl: './recipe-lists.component.html',
  styleUrls: ['./recipe-lists.component.css']
})
export class RecipeListsComponent implements OnInit {

  recipe_list: Recipe[] = [new Recipe('Gyro', 'test', 'https://www.thespruceeats.com/thmb/YPq6QiaRiQbpiV-DexGfDwn6AoQ=/940x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/gyros-a-greek-classic-912899-hero-01-6aabc80d1fb9440d85c51dd0b2fb9d50.jpg'), new Recipe('Gyro', 'test', 'https://www.thespruceeats.com/thmb/YPq6QiaRiQbpiV-DexGfDwn6AoQ=/940x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/gyros-a-greek-classic-912899-hero-01-6aabc80d1fb9440d85c51dd0b2fb9d50.jpg')];

  constructor() {
  }

  ngOnInit(): void {
  }

}
