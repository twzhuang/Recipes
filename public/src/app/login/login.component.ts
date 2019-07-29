import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {username: "", pw: ""};
  errors: any;
  constructor(
      private _httpService: HttpService,
      private _router: Router,
      private _route: ActivatedRoute
  ) { }

  ngOnInit() {
  }
  login() {
      let observable = this._httpService.loginUser(this.user);
      observable.subscribe(data => {
         console.log(data);
          if (data['error']) {
              this.errors = data['error'];
          }
          else {
              localStorage.setItem('id', data['user']['_id']);
              console.log(localStorage);
              this._router.navigate(['/list']);
          }
      });
  }
}
