import { Component, OnInit } from '@angular/core';
import { Dex } from 'src/app/models/dex.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemonlist',
  templateUrl: './pokemonlist.component.html',
  styleUrls: ['./pokemonlist.component.scss']
})
export class PokemonlistComponent implements OnInit {

  currentDex!: Dex;
  baseUrlApi: string  = "https://pokeapi.co/api/v2/pokemon/";
  selectedUrl! : string;

  constructor(
    private service : PokemonService
  ) { }

  ngOnInit(): void {
    this.getCurrent20(this.baseUrlApi)
  }

  getCurrent20(url : string)
  {
    this.service.get20(url).subscribe(
      (PokeService : Dex) => {
        this.currentDex = PokeService
      }
    )
  }

  goPrevious20(){
    if(this.currentDex.previous){
      //solve 'undefined' problem
      this.getCurrent20(this.currentDex.previous);
    }
  }

  goNext20(){
    if(this.currentDex.next){
      this.getCurrent20(this.currentDex.next);
    }
  }

  selected(url:string){
    this.selectedUrl = url;
    console.log(url);
  }

}
