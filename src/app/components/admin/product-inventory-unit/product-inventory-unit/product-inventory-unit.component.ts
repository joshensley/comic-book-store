import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { ProductTypeService } from 'src/app/services/admin/product-type.service';
import { ProductType } from 'src/app/interface/product/ProductType';
import { CategoryTypeService } from 'src/app/services/admin/category-type.service';
import { CategoryType } from 'src/app/interface/product/CategoryType';
import { ProductInventoryUnitService } from 'src/app/services/admin/product-inventory-unit.service';
import { SearchProductInventoryUnit } from 'src/app/interface/product/SearchProductInventoryUnit';

@Component({
  selector: 'app-product-inventory-unit',
  templateUrl: './product-inventory-unit.component.html',
  styleUrls: ['./product-inventory-unit.component.css']
})
export class ProductInventoryUnitComponent implements OnInit {
  productInventoryUnits: SearchProductInventoryUnit | undefined;
  productTypes: ProductType[] = [];
  categoryTypes: CategoryType[] = [];

  faTrash = faTrash;

  pageNumber: number;
  productName: string = "";
  productType: string = "";
  categoryType: string = "";

  // show params
  notification: boolean;
  message: string;
  actionType: string;
  
  constructor(
    private categoryTypeService: CategoryTypeService,
    private productTypeService: ProductTypeService,
    private productInventoryUnitService: ProductInventoryUnitService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.categoryTypeService.getCategoryTypes()
      .subscribe((categoryTypes) => this.categoryTypes = categoryTypes);

    this.productTypeService.getProductTypes()
      .subscribe((productTypes) => this.productTypes = productTypes);

    // set the search values from queryParams
    this.route.queryParams.subscribe((params) => {
      this.pageNumber = params['pageNumber'];
      this.productName = params['productName'];
      this.productType = params['productType'];
      this.categoryType = params['categoryType'];

      // show Params
      this.notification = params['notification'];
      this.message = params['message'];
      this.actionType = params['actionType'];
    });

    if (this.pageNumber === undefined) this.pageNumber = 1;
    if (this.productType === 'All') this.productType = '';
    if (this.categoryType === 'All') this.categoryType = '';

    this.productInventoryUnitService.getProductInventoryUnits(
      this.pageNumber,
      this.productName,
      this.productType,
      this.categoryType).subscribe((productInventoryUnits) => { 
        this.productInventoryUnits = productInventoryUnits 
        console.log(this.productInventoryUnits);
      });
  }

  onSubmit() {

    interface QueryParams {
      [key: string]: any
    }

    var queryParams: QueryParams = {};

    queryParams.pageNumber = 1;
    if (this.productName !== '') queryParams.productName = this.productName;
    if (this.categoryType !== '') queryParams.categoryType = this.categoryType;
    if (this.productType !== '') queryParams.productType = this.productType;

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: queryParams,
      // queryParamsHandling: 'merge'
    });

    if (this.pageNumber === undefined) this.pageNumber = 1;
    if (this.productName === undefined) this.productName = '';
    if (this.categoryType === undefined || this.categoryType === 'All') this.categoryType = '';
    if (this.productType === undefined || this.productType === 'All') this.productType = '';

    this.productInventoryUnitService.getProductInventoryUnits(
      this.pageNumber, 
      this.productName, 
      this.productType, 
      this.categoryType).subscribe((productInventoryUnits) => {
        this.productInventoryUnits = productInventoryUnits;
      })
  }

  nextPageClick(pageIndex: number) {
    const nextPage = pageIndex + 1;

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {pageNumber: nextPage},
      queryParamsHandling: 'merge'
    });

    if (this.productName === undefined) this.productName = "";
    if (this.productType === undefined || this.productType === 'All') this.productType = "";
    if (this.categoryType === undefined || this.categoryType === 'All') this.categoryType = "";

    this.productInventoryUnitService.getProductInventoryUnits(
      nextPage, 
      this.productName, 
      this.productType, 
      this.categoryType)
        .subscribe((productInventoryUnits) => this.productInventoryUnits = productInventoryUnits);
  }

  previousPageClick(pageIndex: number) {
    const previousPage = pageIndex - 1;

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {pageNumber: previousPage},
      queryParamsHandling: 'merge'
    });

    if (this.productName === undefined) this.productName = "";
    if (this.productType === undefined || this.productType === 'All') this.productType = "";
    if (this.categoryType === undefined || this.categoryType === 'All') this.categoryType = "";

    this.productInventoryUnitService.getProductInventoryUnits(
      previousPage, 
      this.productName, 
      this.productType, 
      this.categoryType)
        .subscribe((productInventoryUnits) => this.productInventoryUnits = productInventoryUnits);
  }

 

}
