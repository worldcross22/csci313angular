import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GreetingsComponent } from './greetings/greetings.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, GreetingsComponent, ButtonComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
