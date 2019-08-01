import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-find-recipes',
  templateUrl: './find-recipes.component.html',
  styleUrls: ['./find-recipes.component.css']
})
export class FindRecipesComponent implements OnInit {
  ingredients: any; //checkList
  checkedList: any;
  masterSelected: boolean = false;
  recipes: any;
  showResults: boolean;
  constructor(
      private _httpService: HttpService,
      private _router: Router,
      private _route: ActivatedRoute
  ) { }

  ngOnInit() {
      this.getIngredients();
      console.log(JSON.parse(localStorage.getItem('recipes')));
      this.showResults = JSON.parse(localStorage.getItem('showResults'));
      console.log(this.showResults);
  }
  getIngredients() {
      let observable = this._httpService.getIngredients();
      observable.subscribe(data => {
          console.log(data, typeof data);
          // data.sort(this.compare);
          this.ingredients = data;
          for (let ingredient of this.ingredients) {
              this.ingredients.selected = false;
          }
          console.log(this.ingredients)
      });
  }
  searchRecipes() {
      console.log(this.checkedList);
      var ingredientArr = [];
      // var ingredientStr = "";
      for (let ingredient of this.checkedList) {
          ingredientArr.push(ingredient.name);
      }
      var ingredientStr = ingredientArr.join("%2C").replace(" ", "+");
      console.log(ingredientStr);
      let observable = this._httpService.searchRecipes(ingredientStr);
      observable.subscribe(data => {
         console.log(data);
         this.recipes =  data;
         localStorage.setItem('recipes', JSON.stringify(this.recipes));
         this.showResults = true;
         localStorage.setItem("showResults", JSON.stringify(true));
         console.log(JSON.parse(localStorage.getItem('recipes')));
          // this._router.navigate(['/found']);
      });
  }

  compare(a, b) {
      const ingredientA = a.name.toUpperCase();
      const ingredientB = b.name.toUpperCase();

      let comparison = 0;
      if (ingredientA > ingredientB) {
          comparison = 1;
      }
      else if(ingredientA < ingredientB) {
          comparison = -1;
      }
      return comparison;
  }
  // functions for check box functionality
  checkUncheckAll() {
      for (let ingredient of this.ingredients) {
          ingredient.selected = this.masterSelected;
      }
      this.getCheckedItemList();
  }
  isAllSelected() {
      this.masterSelected = this.ingredients.every(function(item: any) {
          return item.selected == true;
      });
      this.getCheckedItemList();
  }
  getCheckedItemList() {
      this.checkedList = [];
      for (let ingredient of this.ingredients) {
          if (ingredient.selected) { // if selected is true
              this.checkedList.push(ingredient);
          }
      }
      // this.checkedList = JSON.stringify(this.checkedList);
  }
}
