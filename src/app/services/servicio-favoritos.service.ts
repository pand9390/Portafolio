import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioFavoritosService {
@Output() disparadordeFavoritos: EventEmitter<any> = new EventEmitter();

  constructor() { }
}
