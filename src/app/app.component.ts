import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Treinamento Angular';
  isDisable = true;
  fontColor =  'green';
  myValue = 'Inicial';
  alert(){
    this.isDisable = !this.isDisable;
    this.myValue += '.Final'
    console.log("myValue" + this.myValue);
    return alert( "isDisable = " + this.isDisable);
  }
}
