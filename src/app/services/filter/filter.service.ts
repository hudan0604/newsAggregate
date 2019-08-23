import * as global from "../../configuration/endpoints";

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class FilterService {
  articles = [];
  url: string;

  constructor(private http: HttpClient) {}

  sendUrl(url) {
    this.url = url
  }
  
  getArticles() {
    return this.http.get(global.endpoint + this.url)
  }
  catchSearchResults(): any {
   console.log("catch search results: ",this.articles);
  }
}
