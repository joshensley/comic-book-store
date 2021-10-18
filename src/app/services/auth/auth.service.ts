import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ResponseModel } from '../../interface/auth/ResponseModel';
import { Register } from '../../interface/auth/Register';
import { Login } from '../../interface/auth/Login';
import { SuccessLogin } from '../../interface/auth/SuccessLogin';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'api/Authenticate';

  private userIsLoggedIn: boolean = false;
  private subjectUserIsLoggedIn = new Subject<any>();

  private userIsAdmin: boolean = false;
  private subjectUserIsAdmin = new Subject<any>();

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) { }

  isLoggedIn(): void {
    const token = localStorage.getItem("jwt");

    if (token && !this.jwtHelper.isTokenExpired(token)) {
      var userRole = this.jwtHelper.decodeToken(token)['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
      if (userRole === "Admin") {
        this.userIsAdmin = true;
      } else {
        this.userIsAdmin = false;
      }
      
      this.userIsLoggedIn = true
    } else {
      this.userIsLoggedIn = false;
      this.userIsAdmin = false;
    }

    this.subjectUserIsLoggedIn.next(this.userIsLoggedIn); 
    this.subjectUserIsAdmin.next(this.userIsAdmin)
  }

  checkIsLoggedIn(): Observable<any> {
    return this.subjectUserIsLoggedIn.asObservable();
  }

  checkUserIsAdmin(): Observable<any> {
    return this.subjectUserIsAdmin.asObservable();
  }

  register(newUser: Register): Observable<ResponseModel[]> {
    const url = this.apiUrl + "/Register";
    return this.http.post<ResponseModel[]>(url, newUser, httpOptions);
  }

  login(loginUser: Login): Observable<SuccessLogin> {
    const url = this.apiUrl + "/Login";
    return this.http.post<SuccessLogin>(url, loginUser, httpOptions);
  }

  logout(): void {
    localStorage.removeItem("jwt");
    
    this.subjectUserIsLoggedIn.next(false);
    this.subjectUserIsAdmin.next(false);
  }

}
