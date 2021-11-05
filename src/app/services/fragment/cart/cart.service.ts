import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { NavbarCart } from '../../../interface/cart/NavbarCart';
import { Cart } from 'src/app/interface/cart/Cart';
import { CartDatabaseModel } from 'src/app/interface/cart/CartDatabaseModel';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'api/Cart';

  private productToCartSubject = new Subject<any>();
  private editProductInCartSubject = new Subject<any>();
  private deleteProductToCartSubject = new Subject<any>();

  constructor(private http: HttpClient) { }

  // Get Navbar Application User Cart 
  getNavbarApplicationUserCart(applicationUserId: string): Observable<NavbarCart[]> {
    const url = this.apiUrl + '/' + applicationUserId;
    return this.http.get<NavbarCart[]>(url);
  }

  getApplicationUserCartDetails(applicationUserId: string): Observable<Cart[]> {
    const url = this.apiUrl + `/Details/${applicationUserId}`;
    return this.http.get<Cart[]>(url);
  }

  // Add Product to Application User Cart
  addProductToApplicationUserCart(applicationUserId: string, productId: any): Observable<NavbarCart> {
    const url = this.apiUrl + `?applicationUserId=${applicationUserId}&productId=${productId}`;

    return this.http.post<NavbarCart>(url, {}, httpOptions);
  }

  // Edit Product in Application User Cart
  editProductInApplicationUserCart(cartProduct: CartDatabaseModel): Observable<Cart[]> {
    const url = this.apiUrl + '/' + cartProduct.id;
    return this.http.put<Cart[]>(url, cartProduct, httpOptions);
  }

  // Delete Cart Product in Application User Cart
  deleteCartProductInApplicationUserCart(id: number | undefined): Observable<number> {
    const url = this.apiUrl + '/' + id;
    return this.http.delete<number>(url);
  }

  // SUBSCRIPTIONS //

  // Add product to cart subscription
  addProductToCart(product: any): void {
    this.productToCartSubject.next(product);
  }

  onAddProductToCart(): Observable<any> {
    return this.productToCartSubject.asObservable();
  }

  // Edit product in cart subscription
  editProductInCart(): void {
    this.editProductInCartSubject.next();
  }

  onEditProductInCart(): Observable<any> {
    return this.editProductInCartSubject.asObservable();
  }

  // Delete product in cart subscription
  deleteProductInCart(id: number): void {
    this.deleteProductToCartSubject.next(id);
  }

  onDeleteProductInCart(): Observable<any> {
    return this.deleteProductToCartSubject.asObservable();
  }

}
