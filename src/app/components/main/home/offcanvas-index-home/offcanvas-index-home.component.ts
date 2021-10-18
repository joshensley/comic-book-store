import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CategoryTypeService } from 'src/app/services/admin/category-type.service';
import { CategoryType } from 'src/app/interface/product/CategoryType';
import { ProductTypeService } from 'src/app/services/admin/product-type.service';
import { ProductType } from 'src/app/interface/product/ProductType';
import { ProductsService } from 'src/app/services/fragment/products/products.service';

@Component({
  selector: 'app-offcanvas-index-home',
  templateUrl: './offcanvas-index-home.component.html',
  styleUrls: ['./offcanvas-index-home.component.css']
})
export class OffcanvasIndexHomeComponent implements OnInit {
  @Output() onSearchProducts: EventEmitter<any> = new EventEmitter();

  categoryTypes: CategoryType[] | undefined;
  productTypes: ProductType[] | undefined;

  search: string;
  categoryType: string;
  productType: string;

  constructor(
    private categoryService: CategoryTypeService,
    private productTypeService: ProductTypeService,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.categoryService.getCategoryTypes().subscribe((categoryTypes) => {
      this.categoryTypes = categoryTypes;
    });

    this.productTypeService.getProductTypes().subscribe((productTypes) => {
      this.productTypes = productTypes;
    });
  }

  onSubmit() {
    // console.log(this.categoryType);

    console.log(this.productType);

    this.productsService.searchProductType(this.productType);
    this.productsService.searchCategoryType(this.categoryType);
    this.productsService.searchProductName(this.search);
    this.onSearchProducts.emit();
  }

}
