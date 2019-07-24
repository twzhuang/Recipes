import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

    constructor(
        private _httpService: HttpService,
        private _router: Router,
        private _route: ActivatedRoute
    ) {}

    ngOnInit(){

    }


}
