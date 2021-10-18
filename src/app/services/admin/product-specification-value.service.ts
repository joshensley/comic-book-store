import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interface/product/Product';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProductSpecificationValueService {
  private apiUrl = 'api/ProductSpecificationValue';

  constructor(private http: HttpClient) { }

  editProduct(id: number | undefined, product: Product | undefined): Observable<Product> {
    const url = this.apiUrl + '/' + id;
    return this.http.put<Product>(url, product, httpOptions);
  }
}
