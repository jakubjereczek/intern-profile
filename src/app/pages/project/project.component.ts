import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from 'src/app/models/project';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PROJECTS } from 'src/app/models/data-base';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  projectDetails: Observable<Project>;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private router: Router) {
  }

  ngOnInit(): void {
    // Pobieranie danych z listy na podstawie przekazanego ID.
    this.projectDetails = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => PROJECTS.filter(project => project.id === Number(params.get('id'))))
    )
  }

  back() {
    // this.location.back();
    this.router.navigate(['main'], { fragment: 'projects' });
  }

}
