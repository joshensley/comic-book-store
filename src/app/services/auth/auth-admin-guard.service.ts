import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthAdminGuard implements CanActivate {

  constructor(
    private jwtHelper: JwtHelperService, 
    private router: Router) {}

  canActivate() {
    const token = localStorage.getItem("jwt");
    
    // check if user is Admin
    // if not Admin redirect to home page
    if (token && (!this.jwtHelper.isTokenExpired(token)) && 
      (this.jwtHelper.decodeToken(token)['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] === "Admin")) {
      return true
    }

    this.router.navigate(['/']);
    return false;
  }
}