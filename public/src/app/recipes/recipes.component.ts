import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
    showSaved: boolean = true;
    showCooked: boolean = true;
    recipes: any;
    constructor(
        private _httpService: HttpService,
        private _router: Router,
        private _route: ActivatedRoute
    ) {}

    ngOnInit(){
        this.getRecipes();
    }
    showSavedRecipes() {
        this.showCooked = false;
        this.showSaved = true;
    }
    showCookedRecipes() {
        this.showCooked = true;
        this.showSaved = false;
    }
    showBoth() {
        this.showCooked = true;
        this.showSaved = true;

    }
    getRecipes() {
        let observable = this._httpService.getRecipes();
        observable.subscribe(data => {
            console.log(data);
            this.recipes = data;
        });
    }
}
