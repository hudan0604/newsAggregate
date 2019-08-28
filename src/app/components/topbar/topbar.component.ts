import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  constructor(private authService: AuthenticationService, public dialog: MatDialog) { }

  isUserConnected(): boolean {
    return this.authService.isUserConnected();
  }
  openDialog(): void {
    this.dialog.open(LoginComponent, {
      width: '400px'
    });
  }

  ngOnInit() {
  }

}
