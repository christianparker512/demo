import { Component } from '@angular/core';
//component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';

  constructor() {
    console.log('constructor....')
  }
}
