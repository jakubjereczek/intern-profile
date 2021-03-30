import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { PROJECTS } from 'src/app/models/data-base';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = PROJECTS;

  isMessageAlertVisible = false;

  @ViewChild('projectsSection')
  projectsSection!: ElementRef;

  constructor(router: Router) {
    // Wykorzystane w przypadku wyjścia z widoku projektu. 
    // Wrocimy do sekcji #projects.
    router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        const tree = router.parseUrl(router.url);
        if (tree.fragment) {
          const element = document.querySelector("#" + tree.fragment);
          if (element) {
            element.scrollIntoView(true);
          }
        }
      }
    });

  }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollWidth = window.pageYOffset
    const projectSectionWidth = this.projectsSection.nativeElement.offsetTop

    if (scrollWidth > projectSectionWidth - 250) {
      return this.isMessageAlertVisible = true;
    }
    return this.isMessageAlertVisible = false;
  }




}
