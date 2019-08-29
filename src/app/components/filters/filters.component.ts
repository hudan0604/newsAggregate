import { Component, OnInit } from "@angular/core";
import { HomeService } from 'app/services/home/home.service';
import { FilterService } from 'app/services/filter/filter.service';



@Component({
  selector: "app-filters",
  templateUrl: "./filters.component.html",
  styleUrls: ["./filters.component.scss"]
})
export class FiltersComponent implements OnInit {
  sources = [];
  countries = [];
  sourcesIds = [];
  sourcesNames = [];
  uniqueSourcesIds: Array<string>;
  uniqueSourcesNames: Array<string>;
  uniqueCountries: Array<string>;
  isLoading: boolean;
  constructor(
    private homeService: HomeService,
    private filterService: FilterService
  ) { }

  search(search) {
    let array = Object.entries(search);
    let filters = array.filter((e: any) => {
      return (e = e[1].length > 0);
    });

    let index: number;
    // find the array whose values are the sources
    for (let i = 0; i < filters.length; i++) {
      if (filters[i][0] === "sources") {
        index = i;
        filters[index][1] = filters[index][1].toString();
      }
    }
    let url: string = filters[0][1] + "?";
    filters.splice(0, 1);
    for (let elt in filters) {
      url += filters[elt][0] + "=" + filters[elt][1] + "&";
    }
    url = url.slice(0, url.length - 1);
    this.filterService.sendUrl(url);
  }
  getSources(): void {
    this.isLoading = true;
    this.homeService.getAllSources().subscribe(e => {
      this.sources.push(e.sources);

      for (let source of this.sources[0]) {
        this.countries.push(source.country);
        this.sourcesIds.push(source.id);
        this.sourcesNames.push(source.name);
      }
      this.uniqueCountries = Array.from(new Set(this.countries)).sort();
      this.uniqueSourcesIds = Array.from(new Set(this.sourcesIds)).sort();
      this.uniqueSourcesNames = Array.from(new Set(this.sourcesNames)).sort();
      this.isLoading = false;
    });
  }
  ngOnInit() {
    this.getSources();
  }
}
