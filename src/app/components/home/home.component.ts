import { Component, OnInit } from "@angular/core";

import { HomeService } from "app/services/home/home.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  sources = [];
  loading: boolean;
  addedToFavorites: boolean = false;

  constructor(private homeService: HomeService) { }

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

  addToFavorites(source: Object) {
    this.addedToFavorites = !this.addedToFavorites;
    console.log("the source that I want to add to favs: ", source);
  }

  ngOnInit() {
    this.resetSources();
  }
}
