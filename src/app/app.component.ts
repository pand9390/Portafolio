import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(
    private pokemonService:PokemonService
  ){
  }

  public cardsPokemon:any;

  ngOnInit(): void {
    this.cargarData();
  }
  title = 'PokeDex';

  cargarData(){
    this.pokemonService.get(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`).subscribe((respuesta:any)=>{
      // console.log(respuesta);
      this.cardsPokemon = Object.values(respuesta.results)
    })
  }
}
