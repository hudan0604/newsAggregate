import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  isUserConnected(): boolean {
    return this.authService.isUserConnected();
  }

  ngOnInit() {
  }

}
