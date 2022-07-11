import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstCComponent } from './first-c/first-c.component';
import { SecondCComponent } from './second-c/second-c.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstCComponent,
    SecondCComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
