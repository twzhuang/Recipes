import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.css']
})
export class AddIngredientComponent implements OnInit {
  newIngredient: any = {name: "", category: ""};
  optional: any = "";
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  }
  addIngredient() {
      if (this.newIngredient.category == "") {
          this.newIngredient.category = this.optional;
      }
      console.log(this.newIngredient);
      let observable = this._httpService.createIngredient(this.newIngredient);
      observable.subscribe(data => {
         console.log(data);
         this.newIngredient = {name: "", category: ""};
         this.optional = "";
      });
  }
}
