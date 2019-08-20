import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { FiltersComponent } from "./components/filters/filters.component";
import { HomeComponent } from "./components/home/home.component";
import { HttpInterceptor } from "./services/http-interceptor/http-interceptor";
import { NgModule } from "@angular/core";
import { FormsModule }   from '@angular/forms';
import { ResultsComponent } from './components/results/results.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, FiltersComponent, ResultsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,FormsModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
