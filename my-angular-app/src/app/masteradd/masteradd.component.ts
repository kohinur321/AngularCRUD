import { Component } from '@angular/core';
import { Masteradd, MasteraddsService } from '../services/masteradd/masteradd.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductCategoriesService, ProductCategory } from '../services/product-category/product-category.service';

@Component({
  selector: 'app-masteradd',
  templateUrl: './masteradd.component.html',
  styleUrl: './masteradd.component.css',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  standalone: true
})
export class MasteraddComponent {
  productCategories: ProductCategory[] = [];
  productCategory: ProductCategory = {
    name: '',
    productCategoryID: 0,
    products:[]
  };
  masteradds: Masteradd[] = [];
  isList: boolean = true;
  constructor(private productCategoriesService: ProductCategoriesService, private fb: FormBuilder) { 
  }
   ngOnInit() {
    this.getData();
  }
  getData() {
    this.productCategoriesService.getProductCategories().subscribe((data) => {
      this.productCategories = data;
    });
  }
  onSubmit(){ 
    if (this.productCategory.productCategoryID == 0) {// api call for insert
      this.productCategoriesService.addProductCategory(this.productCategory).subscribe(response => {
        this.switchView();
         this.resetData();
      });
    } else {// api call for update
      this.productCategoriesService.updateProductCategory(this.productCategory.productCategoryID, this.productCategory).subscribe(response => {
        this.switchView();
        this.resetData();
      });
    }
  }
  add() {
    this.productCategory.products.push({
      name: '',
      productNumber: '',
      color: '',
      standardCost: 0,
      listPrice: 0,
      size: 0,
      weight: 0,
      productCategoryID: 0,
      productType: '',
    });
  }
  remove(index:number) {
    this.productCategory.products.splice(index, 1);
  }
  resetData() {
    this.productCategory ={
    name: '',
    productCategoryID: 0,
    products:[]
  };
 }
  switchView() {
    this.isList = this.isList == true ? false : true;
    if (this.isList) {
      this.getData();
    }
  }
  delete(id: number) {
    var isConfirm = confirm('Are you sure?');
    if (isConfirm) {
      this.productCategoriesService.deleteProductCategory(id).subscribe(response => {
        this.getData();
      });
    }
  }
  edit(item: ProductCategory) {
    this.productCategory.productCategoryID = item.productCategoryID;
    this.productCategory.name = item.name;
    this.productCategory.products = item.products;
    this.switchView();
  }
}
