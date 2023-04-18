import { Component, Input, OnInit } from '@angular/core';
import { ServicioFavoritosService } from '../services/servicio-favoritos.service';
import { PokemonService } from '../services/pokemon.service';
import { PokemonComponent } from '../pokemon/pokemon.component';
import { AbilitiesService } from '../services/abilities.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{
  @Input() dataEntrante!:any;
  public datosPokemon:any = this.dataEntrante?.name;
  public respuesta:any;
  public resp:any;
  public tipo:any;
  public habilidad:any;
  public urlImage!:string;
  public image:string | undefined;
  ngOnInit(): void {
    //this.image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8GAcNf2A8wsr7rHBPhxfvi36V6Aq2kswNUg&usqp=CAU'
    this.getnombresPokemon();
    // this.getAbilityName();
  }

  constructor(
    private favoritoService:ServicioFavoritosService,
    private pokemonService:PokemonService,
    private abilitiesService:AbilitiesService


  ){}

  agregarFavorito(){
    this.favoritoService.disparadordeFavoritos.emit({
      data:this.dataEntrante
    })
  }

  getnombresPokemon(){
    // this.pokemonService.get(`${this.url}/${this.dataEntrante?.name}`)
    // .subscribe((respuesta:any)=>{
    //   this.resp = respuesta?.id
    //   this.habilidad = respuesta?.abilities[0].ability.name
    //   this.urlImage= respuesta?.sprites?.front_default
    //   this.tipo = respuesta.types[0].type.name
    this.pokemonService.getPokemon(this.dataEntrante?.name)
    .subscribe((respuesta:any)=>{
      this.resp = respuesta?.id
      this.habilidad = respuesta?.abilities[0].ability.name
      this.urlImage= respuesta?.sprites?.front_default
      this.tipo = respuesta.types[0].type.name
    })
  }
  getAbilityName(){
    // this.abilitiesService.getAbility(this.habilidad)
    // .subscribe((respAbility:any)=>{
    //   console.log("enviando habilidad para consulta",respAbility)
    // })
  }


}
