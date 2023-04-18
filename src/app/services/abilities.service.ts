import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, OnInit, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AbilitiesService implements OnInit{
  @Output() disparadordeAbilitie: EventEmitter<any> = new EventEmitter();
  public url:string="https://pokeapi.co/api/v2/ability";
  constructor(private http : HttpClient) { }
  ngOnInit(): void {
    // this.http.get(`${this.url}/${this.disparadordeAbilitie}`)
    // console.log("disparador:",this.disparadordeAbilitie)
  }

  getAbility(nameAb:string){
    return  this.http.get(`${this.url}/${nameAb}`
    )
  }

}
