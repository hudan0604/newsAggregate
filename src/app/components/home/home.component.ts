import { Component, OnInit } from "@angular/core";

import { HomeService } from "src/app/services/home/home.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  sources: Array<any>;
  loading: boolean;

  constructor(private homeService: HomeService) {}

  resetSources() {
    this.loading = true;
    this.homeService.getAllSources().subscribe(e => {
      this.sources = e.sources;
      this.loading = false;
    });
  }

  searchInSources(search) {
    let searchValue: string = search.toLowerCase();
    this.homeService.getAllSources().subscribe(e => {
      this.sources = e.sources.filter(e => {
        return e.name.toLowerCase().startsWith(searchValue);
      });
    });
  }

  ngOnInit() {
    this.resetSources();
  }
}
