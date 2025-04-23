import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasteraddsService {
  private apiUrl = 'https://localhost:7115/ProductCategories'; 
  constructor(private http: HttpClient) {}
}
export interface Masteradd {
  name: string;
  productNumber:string;
  color: string;
  standardCost: number;
  listPrice: number;
  size: number;
  weight: number;
  productCategoryID: number;
  productType: string;
}

