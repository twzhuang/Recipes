import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newUser: any = {fname: "", lname: "", username: "", pw: ""};
  errors: any;
  constructor(
      private _httpService: HttpService,
      private _router: Router,
      private _route: ActivatedRoute
  ) {}

  ngOnInit() {
  }
  register() {
      let observable = this._httpService.createUser(this.newUser);
      observable.subscribe(data => {
         console.log(data);
         // redirect to ingredients page
      });
  }
}
