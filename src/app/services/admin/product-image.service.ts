import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductImage } from 'src/app/interface/product/ProductImage';
import { ThisReceiver } from '@angular/compiler';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-type': 'multipart/form-data',
//   })
// }

interface PostProductImage {
  productId: number | undefined,
  fileUpload: File
}

@Injectable({
  providedIn: 'root'
})
export class ProductImageService {
  private apiUrl = 'api/ProductImage'
  
  constructor(private http: HttpClient) { }

  getProductImagesByProductId(id: string | undefined): Observable<ProductImage[]> {
    const url = this.apiUrl + '/' + id;
    return this.http.get<ProductImage[]>(url);
  }

  postProductImage(productImage: FormData): Observable<ProductImage> {
    return this.http.post<ProductImage>(this.apiUrl, productImage);
  }

  deleteProductImage(id: number): Observable<number> {
    const url = this.apiUrl + '/' + id;
    return this.http.delete<number>(url)
  }
}
