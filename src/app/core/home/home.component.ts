import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  image = 'https://rmhc.org.nz/wp-content/uploads/2018/11/Recipe-Book-top-1024x404-926x400.jpg';
  constructor() { }

  ngOnInit() {
    document.body.className = "selector";
  }

}
