import { Component, OnInit } from "@angular/core";

import { FilterService } from "src/app/services/filter/filter.service";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.scss"]
})
export class ResultsComponent implements OnInit {
  results: any;
  articles: any;

  constructor(private filterService: FilterService) {}

  ngOnInit() {
    this.results = this.filterService.catchSearchResults();
    this.articles = this.results.results;
    console.log(this.articles);
  }
}
