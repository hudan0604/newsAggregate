import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { NgModule } from "@angular/core";
import { ResultsComponent } from "./components/results/results.component";
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "results", component: ResultsComponent },
  { path: "profile", component: ProfileComponent },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
