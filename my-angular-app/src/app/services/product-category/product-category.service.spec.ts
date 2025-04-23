import { TestBed } from '@angular/core/testing';

import { ProductCategoriesService } from './product-category.service';

describe('ProductCategories', () => {
  let service: ProductCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
