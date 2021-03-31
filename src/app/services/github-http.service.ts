import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Repo } from '../models/repo';

@Injectable({
  providedIn: 'root'
})
export class GithubHttpService {

  private URL = "https://api.github.com/users/jakubjereczek/repos"

  constructor(private http: HttpClient) { }

  getRepos(): Observable<Repo[]> {
    console.log("Repos")
    return this.http.get<Repo[]>(this.URL);

  }
}
