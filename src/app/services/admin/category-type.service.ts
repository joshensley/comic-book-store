import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryType } from '../../interface/product/CategoryType';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CategoryTypeService {
  private apiUrl = 'api/CategoryType';

  constructor(private http: HttpClient) { }

  getCategoryTypes(): Observable<CategoryType[]> {
    return this.http.get<CategoryType[]>(this.apiUrl);
  }

  getCategoryTypeById(id: string | undefined): Observable<CategoryType> {
    const url = this.apiUrl + '/' + id;
    return this.http.get<CategoryType>(url);
  }

  createCategoryTypes(categoryType: CategoryType): Observable<CategoryType> {
    return this.http.post<CategoryType>(this.apiUrl, categoryType, httpOptions);
  }

  editCategoryType(id: number | undefined, categoryType: CategoryType): Observable<CategoryType> {
    const url = this.apiUrl + '/' + id;
    return this.http.put<CategoryType>(url, categoryType, httpOptions);
  }

  deleteCategoryType(id: string | undefined): Observable<CategoryType> {
    const url = this.apiUrl + '/' + id;
    return this.http.delete<CategoryType>(url);
  }
}
