import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-saved-recipes',
  templateUrl: './saved-recipes.component.html',
  styleUrls: ['./saved-recipes.component.css']
})
export class SavedRecipesComponent implements OnInit {
    recipes: any;
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

}
