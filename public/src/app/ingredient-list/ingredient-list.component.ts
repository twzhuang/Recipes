import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit {
  user: any = localStorage.getItem('id');
  showAdd: boolean = false;
  catLeft: any = [];
  catRight: any = [];
  categoriesLeft: any = ['Meat', 'Seafood', 'Vegetable', 'Fruit', 'Dairy'];
  categoriesRight: any = ['Grain', 'Starch', 'Spice', 'Sauce'];
  ingredients: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
      this.getIngredients();

  }
  showAddComponent() {
      this.showAdd = true;
  }
  getIngredients() {
      let observable = this._httpService.getIngredients();
      observable.subscribe(data => {
          console.log(data);
          if (!data['error']) {
              this.ingredients = data;
              for (let ingredient of this.ingredients) {
                   if (this.categoriesLeft.includes(ingredient.category)) {
                       if (!this.catLeft.includes(ingredient.category)) {
                           this.catLeft.push(ingredient.category);
                       }
                   }
                   if (this.categoriesRight.includes(ingredient.category)) {
                       if (!this.catRight.includes(ingredient.category)) {
                           this.catRight.push(ingredient.category);
                       }
                   }
               }
               console.log(this.catLeft, this.catRight);
           }
      })
  }

}
