import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';
import { AddIngredientComponent } from './add-ingredient/add-ingredient.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecipesComponent } from './recipes/recipes.component';
import { FindRecipesComponent } from './find-recipes/find-recipes.component';
import { RecipesFoundComponent } from './recipes-found/recipes-found.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { SavedRecipesComponent } from './saved-recipes/saved-recipes.component';
import { CookedRecipesComponent } from './cooked-recipes/cooked-recipes.component';
import { MadeDetailsComponent } from './made-details/made-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    IngredientListComponent,
    AddIngredientComponent,
    LoginComponent,
    RegisterComponent,
    RecipesComponent,
    FindRecipesComponent,
    RecipesFoundComponent,
    RecipeDetailsComponent,
    SavedRecipesComponent,
    CookedRecipesComponent,
    MadeDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
