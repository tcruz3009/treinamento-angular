import { Injectable } from '@angular/core';
import { Item, lista } from '../lista';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor() { }

  getItens(): Item[] {
    return lista;
  }
}
