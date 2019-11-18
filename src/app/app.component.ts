import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  firstName = 'Zaime';
  lastName = 'Ali';

  constructor(){
    console.log('Constructor here..');
  }

  displayName(){
    return this.firstName;
  }

}
