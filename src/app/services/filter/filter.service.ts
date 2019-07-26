import * as global from "../../configuration/endpoints";

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class FilterService {
  articles = [];

  constructor(private http: HttpClient) {}

  getArticles(url): any {
    return this.http.get(global.endpoint + url).subscribe((e: any) => {
      this.articles = e;
      console.log("articles in filterService: ", this.articles);
    });
  }
  catchSearchResults(): Array<Object> {
    return this.articles;
  }
}
