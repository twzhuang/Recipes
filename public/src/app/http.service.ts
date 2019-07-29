import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { }
  getIngredients() {
      return this._http.get('/ingredients/'+localStorage.getItem('id'));
  }
  getRecipes() {
      return this._http.get('/recipes/'+localStorage.getItem('id'));
  }
  saveRecipe(recipe) {
      console.log(recipe);
      return this._http.post('/recipes/'+localStorage.getItem('id'), recipe);
  }
  searchRecipes(ingredients) {
      const headers = new HttpHeaders().set('X-RapidAPI-Key', '406dc17860msh2a864f1dd0cfd32p1e9eadjsn635ffe744da0').set('X-RapidAPI-Host', 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com');
      return this._http.get('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=3&ranking=1&ignorePantry=false&ingredients='+ingredients, {headers});
  }
  getInstructions(id) {
      const headers = new HttpHeaders().set('X-RapidAPI-Key', '406dc17860msh2a864f1dd0cfd32p1e9eadjsn635ffe744da0').set('X-RapidAPI-Host', 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com');
      return this._http.get('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/' + id + '/information', {headers});
  }
  createIngredient(data) {
      console.log(data.userId);
      return this._http.post('/ingredients/'+data.userId, data.ingredient);
  }
  createUser(user) {
      return this._http.post('/register', user);
  }
  loginUser(user) {
      return this._http.post('/login', user);
  }

  deleteRecipe(id){
      return this._http.put('/recipe/'+localStorage.getItem('id'), id);
  }
  // getIngredient(id) {
  //     return this._http.get('/ingredients/'+id)
  // }
  // editIngredient(id, data) {
  //     console.log(data);
  //     return this._http.put('/ingredients/'+id, data);
  // }
  // deleteIngredient(id) {
  //     return this._http.delete('/ingredients/'+id);
  // }
}
