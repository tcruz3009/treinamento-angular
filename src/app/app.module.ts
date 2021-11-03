import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'first', component: FirstComponent},
      {path:'second', component: SecondComponent}
    ])
  ],
  providers: [],
  exports:[AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
