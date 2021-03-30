import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from 'src/app/models/project';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PROJECTS } from 'src/app/models/data-base';
import { Lightbox } from 'ngx-lightbox';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  projectDetails: Observable<Project>;
  _album = [];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private _lightbox: Lightbox) {
  }


  ngOnInit(): void {
    // Pobieranie danych z listy na podstawie przekazanego ID.
    this.projectDetails = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => PROJECTS.filter(project => project.id === Number(params.get('id'))))
    )
    this.initGallery();
  }

  initGallery() {
    // Inizjalizaja galerii.
    this.projectDetails.subscribe((movie) => {
      const images = movie.images;

      for (let i = 0; i < images.length; i++) {
        const src = images[i].link;
        const caption = images[i].caption;
        const thumb = images[i].link;

        const album = {
          src: src,
          caption: caption,
          thumb: thumb
        };

        this._album.push(album);
      }
    });
  }

  open(index: number): void {
    // open lightbox
    console.log("open!!!!!!!!!")
    console.log("open!!!!!!!!!")
    console.log("open!!!!!!!!!")

    this._lightbox.open(this._album, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

  back() {
    // this.location.back();
    this.router.navigate(['main'], { fragment: 'projects' });
  }

}
