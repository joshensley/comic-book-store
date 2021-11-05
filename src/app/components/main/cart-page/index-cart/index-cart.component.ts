import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/fragment/cart/cart.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Cart } from 'src/app/interface/cart/Cart';
import { faTimes, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { CartDatabaseModel } from 'src/app/interface/cart/CartDatabaseModel';

@Component({
  selector: 'app-index-cart',
  templateUrl: './index-cart.component.html',
  styleUrls: ['./index-cart.component.css']
})
export class IndexCartComponent implements OnInit {
  applicationUserId = "";
  loading: boolean = true;
  cart: Cart[] = [];
  cartDescription: string = "";

  subtotal: number = 0;
  tax: number = 0;
  grandTotal: number = 0;

  notification: boolean = false;
  actionType: string = "";
  notificationDescription: string = "";

  faTimes = faTimes;
  faChevronUp = faChevronUp;
  faChevronDown = faChevronDown;

  constructor(
    private cartService: CartService,
    private jwtHelper: JwtHelperService
  ) { }

  ngOnInit(): void {

    // Get application user cart if jwt token exists
    const token = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      
      this.applicationUserId = this.jwtHelper.decodeToken(token)['applicationUserId'];
      this.cartService.getApplicationUserCartDetails(this.applicationUserId)
        .subscribe((cart) => { 
          this.cart = cart 

          this.cartDescription = this.cart.length === 1 
            ? `YOUR CART (${this.cart.length + " ITEM"})` 
            : `YOUR CART (${this.cart.length + " ITEMS"})`;

          this.calculateCart(this.cart);

          this.loading = false;
        });

    } else {
      this.cart = [];
      this.loading = false;
    }
  }

  calculateCart(cart: Cart[]) {
    this.subtotal = cart.reduce(function(previousValue, currentValue) {
      return previousValue + currentValue.totalPrice
    }, 0);

    this.tax = this.subtotal * 0.0625;

    this.grandTotal = this.subtotal + this.tax;
  }

  addQuantity(cartProduct: Cart) {

    this.clearNotification();

    const newCartProduct: CartDatabaseModel = {
      id: cartProduct.id,
      quantity: cartProduct.quantity + 1,
      applicationUserId: cartProduct.applicationUserID,
      productId: cartProduct.productID
    } 
    
    this.loading = true;

    this.cartService.editProductInApplicationUserCart(newCartProduct)
      .subscribe((cart) => {
        this.cart = cart;
        this.cartService.editProductInCart();
        this.calculateCart(this.cart);
        this.loading = false
      },
      (error) => { 

        if (error.status === 400) {
          
          this.actionType = error.error.type;
          this.notificationDescription = error.error.description;
          this.notification = true;
          this.loading = false;
          console.log(error);
        }
       
      });
  }

  removeQuantity(cartProduct: Cart) {

    this.clearNotification();
    
    if (cartProduct.quantity > 1) {

      const newCartProduct: CartDatabaseModel = {
        id: cartProduct.id,
        quantity: cartProduct.quantity - 1,
        applicationUserId: cartProduct.applicationUserID,
        productId: cartProduct.productID
      }

      this.loading = true;

      this.cartService.editProductInApplicationUserCart(newCartProduct)
        .subscribe((cart) => {
          this.cart = cart;
          this.cartService.editProductInCart();
          this.calculateCart(this.cart);
          this.loading = false;
        },
        (error) => {
          this.loading = false;
        });
    }
  }

  onDelete(id: number | undefined) {

    this.clearNotification();

    this.loading = true;

    var result = confirm("Are you sure you want to remove this item?")

    if (result) {
      this.cartService.deleteCartProductInApplicationUserCart(id)
        .subscribe((id) => {
          this.cart = this.cart.filter(item => item.id != id);

          this.cartDescription = this.cart.length === 1 
            ? `YOUR CART (${this.cart.length + " ITEM"})` 
            : `YOUR CART (${this.cart.length + " ITEMS"})`;

          this.cartService.deleteProductInCart(id);
          this.calculateCart(this.cart);

          this.loading = false;
        });
    };
  };

  clearNotification() {
    this.notification = false;
    this.actionType = "";
    this.notificationDescription = "";
  }

}
