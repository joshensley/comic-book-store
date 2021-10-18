import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userIsLoggedIn: boolean = false;
  userIsAdmin: boolean = false;
  subscription: Subscription;

  constructor(
    private authService: AuthService, 
    private router: Router
  ) {}

  ngOnInit(): void {

    this.router.events.subscribe(() => {
      this.subscription = this.authService.checkIsLoggedIn()
        .subscribe(value => { this.userIsLoggedIn = value });

      this.subscription = this.authService.checkUserIsAdmin()
        .subscribe(value => { this.userIsAdmin = value });
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['logout']);
  }

}
