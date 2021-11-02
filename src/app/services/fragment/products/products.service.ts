import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Product } from '../../../interface/product/Product';
import { SearchProduct } from 'src/app/interface/main/search/SearchProduct';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = 'api/Product';

  // search
  private search: string = "";
  private searchSubject = new Subject<any>();

  private categoryType: string = "";
  private categoryTypeSubject = new Subject<any>();

  private productType: string = "";
  private productTypeSubject = new Subject<any>();

  constructor(private http: HttpClient) { }

  // Search Subject
  searchProductName(search: string): void {
    this.search = search;
    this.searchSubject.next(this.search);
  }

  onSearchProductName(): Observable<any> {
    return this.searchSubject.asObservable();
  }

  // Search Category Type
  searchCategoryType(categoryType: string): void {
    this.categoryType = categoryType;
    this.categoryTypeSubject.next(this.categoryType);
  }

  onSearchCategoryType(): Observable<any> {
    return this.categoryTypeSubject.asObservable();
  }

  // Search Product Type
  searchProductType(productType: string): void {
    this.productType = productType;
    this.productTypeSubject.next(this.productType);
  }

  onSearchProductType(): Observable<any> {
    return this.productTypeSubject.asObservable();
  }

  // 
  
  // Api
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getSearchProducts(
    search: string, 
    pageNumber: number, 
    categoryType: string,
    productType: string): Observable<SearchProduct> {
    const url = this.apiUrl + '/Search'

    let params = new HttpParams();

    params = params.append('pageNumber', pageNumber);
    params = params.append('search', search);
    params = params.append('categoryType', categoryType);
    params = params.append('productType', productType);
    
    return this.http.get<SearchProduct>(url, { params: params });
  }

  getProductById(id: string | undefined): Observable<Product> {
    const url = this.apiUrl + '/' + id;
    return this.http.get<Product>(url);
  }


}
