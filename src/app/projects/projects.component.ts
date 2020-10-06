import { Component, OnInit } from '@angular/core';
import projectsData from '../../assets/projects.json';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Projects: any = projectsData;
}
