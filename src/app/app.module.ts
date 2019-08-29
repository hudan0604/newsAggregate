import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FiltersComponent } from "./components/filters/filters.component";
import { HomeComponent } from "./components/home/home.component";
import { HttpInterceptor } from "./services/http-interceptor/http-interceptor";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResultsComponent } from './components/results/results.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { MatDialogModule } from '@angular/material/dialog';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';


@NgModule({
  declarations: [AppComponent, HomeComponent, FiltersComponent, ResultsComponent, TopbarComponent, ProfileComponent, LoginComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule, MatDialogModule, AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence(), AngularFireStorageModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
