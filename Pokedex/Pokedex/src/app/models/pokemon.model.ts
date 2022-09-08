// import { Sprites } from "./sprites.model";

import { Sprites } from "./sprites.model";
import { Stats } from "./stats.model";
import { Types } from "./types.model";

export interface Pokemon{
  id: number;
  name : string;
  height : number;
  weight : number;
  types: Types[];
  sprites: Sprites;
  stats: Stats[];

}
