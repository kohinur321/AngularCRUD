import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Masteradd } from '../masteradd/masteradd.service';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoriesService {

  private apiUrl = 'https://localhost:7115/ProductCategories';
  
  constructor(private http: HttpClient) {}

  getProductCategories(): Observable<ProductCategory[]> {
    return this.http.get<ProductCategory[]>(this.apiUrl);
  }

  addProductCategory(productCategory: ProductCategory): Observable<any> {
    return this.http.post(this.apiUrl, productCategory);
  }

  updateProductCategory(id: number, productCategory: ProductCategory): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, productCategory);
  }

  deleteProductCategory(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}

export interface ProductCategory {
  productCategoryID: number;
  name: string;
  products: Masteradd[];
}

