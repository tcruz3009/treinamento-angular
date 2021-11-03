import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../lista';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() product : Item;
  @Output() alertProduct = new EventEmitter<number>();


  constructor() { }

  ngOnInit(): void {
  }

  showAlertPreco(value: number) {
    this.alertProduct.emit(value);
  }

}
