import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: 
    `<app-greetings>
      <em>{{greetings}}</em>
      <p>lorem ipsum</p>
    </app-greetings>`,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  greetings = 'Hello Angular';
}
