import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';

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

  user = {
    username: '',
    password: ''
  };

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

  onSubmit(theForm: NgForm){
    console.log(theForm.value.username);
    this.user.username = theForm.value.username;
    this.user.password = theForm.value.password;

    console.log(this.user);

    // this.http.get('/post', this.user);
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
