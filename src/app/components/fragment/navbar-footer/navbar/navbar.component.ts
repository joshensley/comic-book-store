import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NavbarService } from 'src/app/services/fragment/navbar/navbar.service';
import { CartService } from 'src/app/services/fragment/cart/cart.service';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NavbarCart } from 'src/app/interface/cart/NavbarCart';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbarCart: NavbarCart[] = [];

  userIsLoggedIn: boolean = false;
  userIsAdmin: boolean = false;
  subscription: Subscription;

  faShoppingCart = faShoppingCart;

  constructor(
    private navbarService: NavbarService,
    private cartService: CartService,
    private authService: AuthService, 
    private jwtHelper: JwtHelperService,
    private router: Router,
  ) {}

  ngOnInit(): void {

    // this.router.events will trigger on new page navigation
    this.router.events.subscribe((event) => {

      // api/Cart/{applicationUserId} was being called multiple times
      // use this to make the call only once
      if (event instanceof NavigationEnd) {  

        this.subscription = this.authService.checkIsLoggedIn()
        .subscribe(value => { this.userIsLoggedIn = value });

        this.subscription = this.authService.checkUserIsAdmin()
          .subscribe(value => { this.userIsAdmin = value });

        // Get application user cart if jwt token exists
        const token = localStorage.getItem("jwt");
        if (token && !this.jwtHelper.isTokenExpired(token)) {

          var applicationUserId = this.jwtHelper.decodeToken(token)['applicationUserId'];

          // this.navbarService.getApplicationUserCart(applicationUserId)
          //   .subscribe(navbarCart => this.navbarCart = navbarCart);

          this.cartService.getNavbarApplicationUserCart(applicationUserId)
            .subscribe(navbarCart => this.navbarCart = navbarCart);

        } else {
          // If jwt does not exist set the navbarCart to an empty array
          this.navbarCart = [];
        }
      }

    });

    // When 
    this.subscription = this.cartService.onAddProductToCart()
      .subscribe((value) => this.navbarCart.push(value));
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['logout']);
  }

}
