import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-pokemondetails',
  templateUrl: './pokemondetails.component.html',
  styleUrls: ['./pokemondetails.component.scss']
})
export class PokemondetailsComponent implements OnInit {

  currentPokemon! : Pokemon;
  data: any;


  public getTypes() : string{
    let typesList : string[] = [];
    for (const onetype of this.currentPokemon.types) {
      typesList.push(" " + onetype.type.name)
    }
    return typesList.toString();
  }

  radarChartOptions: ChartConfiguration<'radar'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins:{
      legend:{
        display: false,
      }
    }
  };

  radarChartLabels: string[] = [
    'hp',
    'attack',
    'defense',
    'special-attack',
    'special-defense',
    'speed'
];

radarChartDatasets!: ChartConfiguration<'radar'>['data']['datasets'];

  @Input() set url(thisUrl:string){
    this.service.getOne(thisUrl).subscribe((data:Pokemon) => {
      this.currentPokemon = data;

      this.generateChart();
    })
  }

  constructor(private service : PokemonService) {
  }

  ngOnInit(): void {
  }

  generateChart(){
    this.radarChartDatasets = [
      {
        data:[
          this.currentPokemon.stats[0].base_stat,
          this.currentPokemon.stats[1].base_stat,
          this.currentPokemon.stats[2].base_stat,
          this.currentPokemon.stats[3].base_stat,
          this.currentPokemon.stats[4].base_stat,
          this.currentPokemon.stats[5].base_stat
        ],
        label: 'Stats',

      }
    ];
  }
}
