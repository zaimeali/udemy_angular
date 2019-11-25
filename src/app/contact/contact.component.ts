import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    this.http.post('https://jsonplaceholder.typicode.com/posts', {
      userId: Math.random(),
      id: Math.random(),
      title: form.value.title
    }).subscribe(res => {
      console.log(res);
    }, error => {
      console.log(error);
    });
  }

  
}
