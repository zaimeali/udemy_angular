import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  posts: object;

  // we create class for services of data we want
  // we use constructor for injecting
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(posts => {
      this.posts = posts;

      console.log(this.posts);
    });

  }

}
