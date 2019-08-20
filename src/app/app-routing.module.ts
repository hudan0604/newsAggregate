import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { NgModule } from "@angular/core";
import { ResultsComponent } from "./components/results/results.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "results", component: ResultsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
