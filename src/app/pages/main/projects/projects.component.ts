import { Component, OnInit } from '@angular/core';
import { PROJECTS } from 'src/app/models/data-base';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = PROJECTS;

  constructor() { }

  ngOnInit(): void {
  }

}
