import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { 
  ProductType, 
  ProductTypeWithProductSpecifications 
} from '../../interface/product/ProductType';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProductTypeService {
  private apiUrl = 'api/ProductType';

  constructor(private http: HttpClient) { }

  getProductTypes(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>(this.apiUrl);
  }

  getProductTypesWithProductSpecifications(): Observable<ProductTypeWithProductSpecifications[]> {
    const url = this.apiUrl + '/ProductSpecifications';
    return this.http.get<ProductTypeWithProductSpecifications[]>(url);
  }

  getProductTypeByIdWithProductSpecifications(id: string | undefined): Observable<ProductTypeWithProductSpecifications> {
    const url = this.apiUrl + '/ProductSpecifications/' + id;
    return this.http.get<ProductTypeWithProductSpecifications>(url);
  }

  getProductTypeById(id: string | undefined): Observable<ProductType> {
    const url = this.apiUrl + '/' + id;
    return this.http.get<ProductType>(url);
  }

  createProductType(productType: ProductType): Observable<ProductType> {
    return this.http.post<ProductType>(this.apiUrl, productType, httpOptions);
  }

  editProductType(id: number | undefined, productType: ProductType): Observable<ProductType> {
    const url = this.apiUrl + '/' + id;
    return this.http.put<ProductType>(url, productType, httpOptions);
  }

  deleteProductType(id: string | undefined): Observable<ProductType> {
    const url = this.apiUrl + '/' + id;
    return this.http.delete<ProductType>(url);
  }
}
