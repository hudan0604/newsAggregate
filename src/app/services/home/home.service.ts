import * as global from "../../configuration/endpoints";

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getAllSources(): Observable<any> {
    return this.http.get(global.endpoint + "sources?");
  }
}
