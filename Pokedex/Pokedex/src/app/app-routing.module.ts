import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemondetailsComponent } from './components/pokemondetails/pokemondetails.component';
import { PokemonlistComponent } from './components/pokemonlist/pokemonlist.component';

const routes: Routes = [
  {path:"", redirectTo: 'list', pathMatch: 'full'},
  {path: "list", component: PokemonlistComponent },
  {path: "detail/:id", component: PokemondetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
