import { Component, OnInit } from "@angular/core";
import { FilterService } from "src/app/services/filter/filter.service";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.scss"]
})
export class ResultsComponent implements OnInit {

  articles: any;
  loading: boolean;

  constructor(private filterService: FilterService) { }

  ngOnInit() {
    this.loading = true;
    this.filterService.getArticles().subscribe((e: any) => {
      this.articles = e.articles;
      this.loading = false;
      console.log('the whole repsonse from backend: ', e);

      console.log("articles found after search: ", this.articles);
    });

  }
}
