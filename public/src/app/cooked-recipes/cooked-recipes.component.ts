import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-cooked-recipes',
  templateUrl: './cooked-recipes.component.html',
  styleUrls: ['./cooked-recipes.component.css']
})
export class CookedRecipesComponent implements OnInit {
  recipes: any;
  recipesMade: [];
  constructor(
      private _httpService: HttpService,
      private _router: Router,
      private _route: ActivatedRoute
  ) {}
  ngOnInit() {
      this.getRecipes();
      console.log("recipes", this.recipes);
  }

  getRecipes() {
      let observable = this._httpService.getRecipes();
      observable.subscribe(data => {
          console.log("data",data);
          this.recipes = data;
      });
  }

  delete(id){
      let observable = this._httpService.deleteRecipe(id);
      observable.subscribe(()=>{
          console.log("deleted");
      })
  }

}
