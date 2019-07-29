import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-recipes-found',
  templateUrl: './recipes-found.component.html',
  styleUrls: ['./recipes-found.component.css']
})
export class RecipesFoundComponent implements OnInit {
  recipes: any;
  constructor(
      private _httpService: HttpService,
      private _router: Router,
      private _route: ActivatedRoute,
  ) { }

  ngOnInit() {
      this.recipes = JSON.parse(localStorage.getItem('recipes'));
      console.log(this.recipes);
      for (let recipe of this.recipes) {
          recipe.show = false;
      }
  }
  showDetails(recipe) {
      // if (!recipe['instructions']) {
      //     let observable = this._httpService.getInstructions(recipe['id']);
      //     observable.subscribe(data => {
      //        console.log(data);
      //        recipe.instructions = data;
      //        recipe.show = true;
      //    });
      // }
      // else {
      //     recipe.show = !recipe.show;
      // }
      // console.log(recipe);\
      console.log(JSON.parse(localStorage.getItem("recipe")));
      let observable = this._httpService.getInstructions(recipe['id']);
      observable.subscribe(data => {
          recipe.instructions = data;
          localStorage.setItem("recipe", JSON.stringify(recipe));
          this._router.navigate(['/details']);
      });
  }


}
