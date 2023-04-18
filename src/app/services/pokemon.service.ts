import { EventEmitter, Injectable, OnInit, Output } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService{
  @Output() disparadorPokemon: EventEmitter<any> = new EventEmitter();


  private url:string="https://pokeapi.co/api/v2/pokemon";


  constructor(private http : HttpClient) { }


  getPokemon(name:string){
    return  this.http.get(`${this.url}/${name}`)
  }

  public get(url:string){
    return this.http.get(url)
  }
  public getPokemonData(url:string){
    return this.http.get(url)
  }
  public getAbilityData(url:string){
    return this.http.get(url)
  }

}
