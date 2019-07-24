import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';
import { AddIngredientComponent } from './add-ingredient/add-ingredient.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecipesComponent } from './recipes/recipes.component';

const routes: Routes = [

    // { path: '**', component: PageNotFoundComponent }
  // redirect to /alpha if there is nothing in the urlcopy
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'list', component: IngredientListComponent, children: [
      { path: 'add', component: AddIngredientComponent }]
  },
  { path: 'recipes', component: RecipesComponent},
  // the ** will catch anything that did not match any of the above routes
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
