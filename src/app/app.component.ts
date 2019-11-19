import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  firstName = 'Abdul';
  lastName = 'Raffay';

  status: boolean;

  constructor(){
    console.log('Constructor here..');

    this.getUserStatus();
  }

  displayName(){
    return this.firstName;
  }

  getUserStatus(){
    this.status = false;
  }

  greetPerson(){
    alert("Hi");
  }

  mousingOver(){
    alert("We Just Moused Over");
  }

  keyDowning(){
    alert("You Keydown");
  }
}
