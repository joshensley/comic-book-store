import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interface/product/Product';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

export interface IProduct {
  id?: string,
  name: string,
  description: string,
  regularPrice: number,
  discountPrice: number,
  isActive: boolean,
  categoryTypeId: number,
  productTypeId: number
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'api/Product';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProductById(id: string | undefined): Observable<Product> {
    const url = this.apiUrl + '/' + id;
    return this.http.get<Product>(url);
  }

  getProductDetailsById(id: string | undefined): Observable<Product> {
    const url = this.apiUrl + '/Details/' + id;
    return this.http.get<Product>(url);
  }

  createProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(this.apiUrl, product, httpOptions);
  }

  editProduct(id: string | undefined, product: IProduct): Observable<IProduct> {
    const url = this.apiUrl + '/' + id;
    return this.http.put<IProduct>(url, product, httpOptions);
  }

  deleteProduct(id: string | undefined): Observable<Product> {
    const url = this.apiUrl + '/' + id;
    return this.http.delete<Product>(url);
  }
}
