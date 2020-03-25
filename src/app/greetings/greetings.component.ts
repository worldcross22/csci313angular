import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-greetings',
  template: `
    <h1><ng-content select = 'em'></ng-content></h1>
    <div><ng-content select = 'p'></ng-content></div>
    `,
  styleUrls: ['./greetings.component.css']
})
export class GreetingsComponent implements OnInit {
  //@Input() message: string;
  constructor() { }

  ngOnInit() {
  }

}