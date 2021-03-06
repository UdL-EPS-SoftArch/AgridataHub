import { Component, OnInit } from '@angular/core';
import { AuthenticationBasicService } from '../login-basic/authentication-basic.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isCollapsed: boolean;

  constructor(private authenticationService: AuthenticationBasicService) {
  }

  ngOnInit(): void {
    this.isCollapsed = true;
  }

  isLogged(): boolean {
    return this.authenticationService.isLoggedIn();
  }

  isReuser(): boolean {
    return this.authenticationService.getCurrentUser().getRoles().includes('reuser');
  }

  isProvider(): boolean {
    return this.authenticationService.getCurrentUser().getRoles().includes('provider');
  }
}
