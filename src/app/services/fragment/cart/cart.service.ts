import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { NavbarCart } from '../../../interface/cart/NavbarCart';

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

  constructor(private http: HttpClient) { }

  // Get Navbar Application User Cart 
  getNavbarApplicationUserCart(applicationUserId: string): Observable<NavbarCart[]> {
    const url = this.apiUrl + '/' + applicationUserId;
    return this.http.get<NavbarCart[]>(url);
  }

  // Add Product to Application User Cart
  addProductToApplicationUserCart(applicationUserId: string, productId: any): Observable<NavbarCart> {
    const url = this.apiUrl + `?applicationUserId=${applicationUserId}&productId=${productId}`;

    return this.http.post<NavbarCart>(url, {}, httpOptions);
  }

  // SUBSCRIPTIONS //

  // Add product to cart subscription
  addProductToCart(product: any): void {
    this.productToCartSubject.next(product);
  }

  onAddProductToCart(): Observable<any> {
    return this.productToCartSubject.asObservable();
  }

}
