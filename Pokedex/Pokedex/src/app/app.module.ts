import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { PokemonlistComponent } from './components/pokemonlist/pokemonlist.component';
import { PokemondetailsComponent } from './components/pokemondetails/pokemondetails.component';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule} from 'primeng/button';
import { CardModule} from 'primeng/card';
import { NgChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    AppComponent,
    PokemonlistComponent,
    PokemondetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    CardModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
