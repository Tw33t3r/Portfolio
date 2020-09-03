import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //Download file from assets
  //https://stackoverflow.com/questions/35138424/how-do-i-download-a-file-with-angular2-or-greater'

  //or something like this in the html

  /*<a download="filename" target="_blank" href="/assets/images/blabla.png">
  Click here to download image
  </a> */
}
