import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: any;
  saved: boolean = false;

  constructor(
      private _httpService: HttpService,
      private _router: Router,
      private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log(localStorage);
    this.recipe = JSON.parse(localStorage.getItem("recipe"));
    console.log(JSON.parse(localStorage.getItem("recipe")));
    // this._route.params.subscribe((params: Params) => {
    //     console.log(params['id']);
    //     let observable = this._httpService.getInstructions(params['id']);
    //     observable.subscribe(data => {
    //         this.recipe.instructions = data;
    //         localStorage.setItem("recipe", JSON.stringify(this.recipe));
    //         // console.log(this.recipe);
    //         console.log(JSON.parse(localStorage.getItem("recipe")));
    //
    //     });
    // });
  }
  saveRecipe(){
      let observable = this._httpService.saveRecipe(this.recipe);
      observable.subscribe(data => {
         console.log(data);
         this.saved = true;
      });
  }

  makeRecipe(){
      this.recipe['made'] = true;
      this.recipe['notes'] = '';
      this.recipe['rating'] = '';
      this.saveRecipe();
      this._router.navigate(['/recipe/details']);
    }

}
