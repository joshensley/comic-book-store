import { Component, OnInit, Input, ResolvedReflectiveFactory } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { Product } from 'src/app/interface/product/Product';
import { CartService } from 'src/app/services/fragment/cart/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;

  constructor(
    private cartService: CartService,
    private router: Router,
    private jwtHelper: JwtHelperService
    ) { }

  ngOnInit(): void {
  }

  onClick(productId: number | undefined) {

    const token = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)) {

      var applicationUserId = this.jwtHelper.decodeToken(token)['applicationUserId'];

      // add to application user cart
      this.cartService.addProductToApplicationUserCart(applicationUserId, productId)
        .subscribe(
          (product) => { this.cartService.addProductToCart(product) }, // subscription will be called in navbar.component.ts
          (error) => { console.log(error) }
        );
    } else {
      this.router.navigate(['./login']);
    }

    // if no token or expired token product doesn't add to cart
  }

}
