import { Component, Input, OnInit } from '@angular/core';
import { AbilitiesService } from '../services/abilities.service';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.scss']
})
export class AbilitiesComponent implements OnInit {
  @Input() dataInicio!:any;
  nameAb!:string;
  public pnameAb!:string;
  constructor(
    private abilitiesService :AbilitiesService,
    private pokemonService:PokemonService
  ){}
  ngOnInit(): void {
    this.abilitiesService.disparadordeAbilitie.emit({
      data:this.dataInicio
    })

    this.abilitiesService.disparadordeAbilitie.subscribe(data =>{
      // console.log("recibiendo data",data)
    })

  }

  agregarAbilidad(){
    this.abilitiesService.disparadordeAbilitie.emit({
      data:this.dataInicio,
    })
    // console.log("habilidad : ",this.dataInicio)
  }

  public searchAb(): void{
    this.abilitiesService.getAbility(this.dataInicio).subscribe((data:any) =>{
      this.pnameAb =data.effect_entries[0].effect
    })
  }
}
