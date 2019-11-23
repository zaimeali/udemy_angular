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
  posts: object[];

  status: boolean;

  constructor(){
    console.log('Constructor here..');

    this.getUserStatus();

    this.posts = [
      {title: 'Post 1'},
      {title: 'Post 2'},
      {title: 'Post 3'},
      {title: 'Post 4'},
      {title: 'Post 5'}
    ];
  }

  onSubmit(){
    console.log("Clicked Submit Button");
  }

  displayName(){
    return this.firstName;
  }

  getUserStatus(){
    this.status = true;
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
