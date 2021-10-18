import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { Router } from '@angular/router';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'comic-book-store';

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.authService.isLoggedIn();
    });
  }

  // Hard reloads the page if the back or forward button in browser is pushed
  @HostListener('window:popstate', ['$event'])
  onPopState() {
    location.reload()
  }
}