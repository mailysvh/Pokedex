import { PokeObjects } from "./pokeobjects.model";

export interface Dex{
  count: number,
  next?: string,
  previous?: string,
  results: PokeObjects[]
}
