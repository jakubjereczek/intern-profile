import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PROJECTS } from 'src/app/models/data-base';
import { Project } from 'src/app/models/project';
import { Repo } from 'src/app/models/repo';
import { GithubHttpService } from 'src/app/services/github-http.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = PROJECTS;
  githubRepos$: Observable<Repo[]>;

  isMessageAlertVisible = false;

  @ViewChild('projectsSection')
  projectsSection!: ElementRef;

  constructor(router: Router, private githubHttp: GithubHttpService) {
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
    this.getRepos();
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

  getRepos() {
    this.githubRepos$ = this.githubHttp.getRepos().pipe(
      map(results => results.sort((a, b) => {
        return a.created_at > b.created_at ? 1 : a.created_at === b.created_at ? 0 : -1;
      }))
    );
  }

  moveToGithubProject(repo: Repo) {
    window.location.href = repo.html_url;
  }




}
