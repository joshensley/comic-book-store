import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userIsLoggedIn: boolean = false;
  subscription: Subscription;

  email: string;
  password: string;
  invalidLogin = false;

  constructor(
    private authService: AuthService, 
    private router: Router) { }

  ngOnInit(): void { }

  onSubmit() {

    const loginUser = {
      email: this.email,
      password: this.password
    };

    this.authService.login(loginUser)
      .subscribe((response) => {

        const token = response.token;
        localStorage.setItem("jwt", token);
        this.invalidLogin = false;

        // Check if user is logged in
        this.authService.isLoggedIn();

        this.router.navigate(['/']);

      },
      err => { 
        this.invalidLogin = true; 
      }
    );  
  }
}
