import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { IngredientListComponent } from '../ingredient-list/ingredient-list.component';

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.css']
})
export class AddIngredientComponent implements OnInit {
  newIngredient: any = {name: "", category: ""};
  optional: any = "";
  constructor(
      private _httpService: HttpService,
      private _ingredientList: IngredientListComponent
  ) { }

  ngOnInit() {
      var element = document.getElementById("add");
      element.scrollIntoView();
  }
  addIngredient() {
      if (this.newIngredient.category == "") {
          this.newIngredient.category = this.optional;
      }
      console.log(this.newIngredient);
      console.log(localStorage);
      let observable = this._httpService.createIngredient({ingredient: this.newIngredient, userId: localStorage.getItem('id')});
      observable.subscribe(data => {
         console.log(data);
         this.newIngredient = {name: "", category: ""};
         this.optional = "";
         this._ingredientList.getIngredients();
      });
  }
}
