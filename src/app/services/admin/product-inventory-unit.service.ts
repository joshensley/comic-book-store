import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchProductInventoryUnit } from 'src/app/interface/product/SearchProductInventoryUnit';
import { ProductInventoryUnit } from 'src/app/interface/product/ProductInventoryUnit';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

interface IProductInventoryUnit {
  inStock:boolean,
  productId: number
}

@Injectable({
  providedIn: 'root'
})
export class ProductInventoryUnitService {
  private apiUrl = 'api/ProductInventoryUnit';

  constructor(private http: HttpClient) { }

  getProductInventoryUnits(
    pageNumber: number, 
    productName: string | undefined, 
    productType: string | undefined, 
    categoryType: string | undefined): Observable<SearchProductInventoryUnit> {

      let params = new HttpParams();

      params = params.append('pageNumber', pageNumber);
      if (productName !== undefined) params = params.append('productName', productName);
      if (productType !== undefined) params = params.append('productType', productType);
      if (categoryType !== undefined) params = params.append('categoryType', categoryType);

      return this.http.get<SearchProductInventoryUnit>(this.apiUrl, { params: params });
  }

  getProductInventoryUnitById(id: string | undefined): Observable<ProductInventoryUnit> {
    const url = this.apiUrl + '/' + id;
    return this.http.get<ProductInventoryUnit>(url);
  }

  postProductInventoryUnits(productInventoryUnit: IProductInventoryUnit, quantity: number): Observable<boolean> {
    const url = this.apiUrl + `?quantity=${quantity}`;
    return this.http.post<boolean>(url, productInventoryUnit, httpOptions);
  }

  deleteProductInventoryUnitById(id: string | undefined): Observable<boolean> {
    const url = this.apiUrl + '/' + id;
    return this.http.delete<boolean>(url);
  }

}
