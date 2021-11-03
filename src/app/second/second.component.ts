import { Component, OnInit } from '@angular/core';
import { Item, lista } from '../lista';
import { SecondService } from './second.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  products: Item[] = [];
  constructor(private service: SecondService) { }

  ngOnInit(): void {
    this.products = this.service.getItens();
  }

  alertProduct(valor: number){
    alert(valor);
  }

}
