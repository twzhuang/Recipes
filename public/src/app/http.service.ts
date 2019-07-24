import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { }
  getIngredients() {
      return this._http.get('/ingredients');
  }
  // getIngredient(id) {
  //     return this._http.get('/ingredients/'+id)
  // }
  createIngredient(ingredient) {
      return this._http.post('/ingredients', ingredient);
  }
  createUser(user) {
      return this._http.post('/register', user);
  }
  // editIngredient(id, data) {
  //     console.log(data);
  //     return this._http.put('/ingredients/'+id, data);
  // }
  // deleteIngredient(id) {
  //     return this._http.delete('/ingredients/'+id);
  // }
}
