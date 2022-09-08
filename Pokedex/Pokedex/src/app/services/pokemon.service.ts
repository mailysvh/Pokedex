import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Dex } from "../models/dex.model";
import { Pokemon } from "../models/pokemon.model";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {


  constructor(
    private _httpClient : HttpClient
  ) { }

  get20(url:string) : Observable<Dex> {
    return this._httpClient.get<Dex>(url)
  }

  getOne(url:string) : Observable<Pokemon>{
    return this._httpClient.get<Pokemon>(url)
  }

}
