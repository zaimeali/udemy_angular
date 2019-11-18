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

  status: boolean;

  constructor(){
    console.log('Constructor here..');
  }

  displayName(){
    return this.firstName;
  }

  getUserStatus(){
    this.status = true;
  }

}
