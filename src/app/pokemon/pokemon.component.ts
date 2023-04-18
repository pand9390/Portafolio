import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { AbilitiesService } from '../services/abilities.service';
import { ServicioFavoritosService } from '../services/servicio-favoritos.service';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  @Input() dataEntrantePokemon:any;
  public listaVideos:Array<any> =[];
  pname!:string;
  name!: string;
  urlImage!: string;
  tipo!:string;
  public habilidades!: string;
  constructor(
    private pokemonService : PokemonService,
    private abilitiesService: AbilitiesService,
    private favoritoService:ServicioFavoritosService
    ){}

  ngOnInit(): void {
    this.pokemonService.disparadorPokemon.emit({
      data:this.dataEntrantePokemon
    })

    this.favoritoService.disparadordeFavoritos.subscribe(data =>{
      console.log("reciviendo data",data)
      this.listaVideos.push(data)
    })
  }

  search(): void{
    this.pokemonService.getPokemon(this.name).subscribe((data:any) =>{
      this.pname =data.name
      this.urlImage= data.sprites.front_default
      this.tipo = data.types[0].type.name
      this.habilidades = data.abilities[0].ability.name
    })

  }
}
