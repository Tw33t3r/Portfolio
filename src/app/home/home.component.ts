import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  home = {
    title: 'Garrett Tvedt',
    subtitle: 'Programmer',
    image: '/assets/background.jpg'
  };

  constructor() { }

  resize() {
  
    let winwidth = window.innerWidth;
    let winheight = window.innerHeight;

  }

  ngOnInit(): void {
  }

}
