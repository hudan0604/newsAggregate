import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
  isUserConnected(): boolean {
    return localStorage.getItem('users') ? true : false;
  }
}
