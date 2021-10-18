import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductSpecification } from 'src/app/interface/product/ProductSpecification';
import { ProductTypeWithProductSpecifications } from 'src/app/interface/product/ProductType';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProductSpecificationService {
  private apiUrl = 'api/ProductSpecification';

  constructor(private http: HttpClient) { }

  createProductSpecification(productSpecification: ProductSpecification): Observable<ProductSpecification> {
    return this.http.post<ProductSpecification>(this.apiUrl, productSpecification, httpOptions);
  }

  editProductSpecification(id: number |undefined, productType: ProductTypeWithProductSpecifications): Observable<ProductTypeWithProductSpecifications> {
    const url = this.apiUrl + '/' + id;
    return this.http.put<ProductTypeWithProductSpecifications>(url, productType, httpOptions);
  }

  deleteProductSpecification(id: number): Observable<ProductSpecification> {
    const url = this.apiUrl + '/' + id;
    return this.http.delete<ProductSpecification>(url);
  }
}
