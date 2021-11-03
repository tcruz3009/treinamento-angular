import { Injectable } from '@angular/core';
import { Item, lista } from '../lista';

@Injectable({
  providedIn: 'root'
})
export class SecondService {

  constructor() { }

  getItens(): Item[] {
    return lista;
  }
}
