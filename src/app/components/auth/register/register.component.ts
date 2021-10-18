import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;

  constructor(
    private authService: AuthService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match. Please re-enter your password.')
      return;
    }

    const newUser = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword
    };

    console.log(newUser);

    // submit

    // need to manage of how the errors are displayed
    // need to route to login page on success
    this.authService.register(newUser)
      .subscribe((response) => { 
        console.log(response) 
      },
      err => console.log(err)
    );
  }
}