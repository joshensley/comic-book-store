import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ProductsService } from 'src/app/services/fragment/products/products.service';
import { CartService } from 'src/app/services/fragment/cart/cart.service';
import { Product } from 'src/app/interface/product/Product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index-product',
  templateUrl: './index-product.component.html',
  styleUrls: ['./index-product.component.css']
})
export class IndexProductComponent implements OnInit {
  product: Product | undefined = undefined;

  constructor(
    private jwtHelper: JwtHelperService,
    private cartService: CartService,
    private productsService: ProductsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.router.url.split('/').pop();

    this.productsService.getProductById(id)
      .subscribe((product) => {
        console.log(product); 
        this.product = product 
      });

  }

  onClick(productId: number | undefined) {
    const token = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)) {

      var applicationUserId = this.jwtHelper.decodeToken(token)['applicationUserId'];

      // add to application user cart
      this.cartService.addProductToApplicationUserCart(applicationUserId, productId)
        .subscribe(
          (product) => {this.cartService.addProductToCart(product)}, // subscription will be called in navbar.component.ts
          (error) => { console.log(error) } 
        );
    } else {
      this.router.navigate(['./login']);
    }
  }

}
