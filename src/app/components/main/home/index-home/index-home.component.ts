import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductsService } from 'src/app/services/fragment/products/products.service';
import { SearchProduct } from 'src/app/interface/main/search/SearchProduct';


@Component({
  selector: 'app-index-home',
  templateUrl: './index-home.component.html',
  styleUrls: ['./index-home.component.css']
})
export class IndexHomeComponent implements OnInit {
  products: SearchProduct | undefined = undefined;

  pageNumber: number;
  search: string = "";
  categoryType: string = "";
  productType: string = "";

  subscription: Subscription;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.subscription = this.productsService.onSearchProductName()
      .subscribe(value => this.search = value);

    this.subscription = this.productsService.onSearchCategoryType()
      .subscribe(value => this.categoryType = value);

    this.subscription = this.productsService.onSearchProductType()
      .subscribe(value => this.productType = value);
  }

  ngOnInit(): void {
    
    // set the search values from queryParams
    this.route.queryParams.subscribe((params) => {
      this.pageNumber = params['pageNumber'];
      this.search = params['search'];
      this.categoryType = params['categoryType'];
      this.productType = params['productType'];
    });

    if (this.pageNumber === undefined) this.pageNumber = 1;
    if (this.search === undefined) this.search = "";
    if (this.categoryType === undefined) this.categoryType = "";
    if (this.productType === undefined) this.productType = "";
    
    this.productsService.getSearchProducts(
      this.search, 
      this.pageNumber, 
      this.categoryType,
      this.productType).subscribe((products) => this.products = products);
  }

  searchProducts() {
    this.subscription = this.productsService.onSearchProductName()
      .subscribe(value => { this.search = value });

    this.subscription = this.productsService.onSearchCategoryType()
      .subscribe(value => this.categoryType = value);

    this.subscription = this.productsService.onSearchProductType()
      .subscribe(value => this.productType = value);

    // the params won't be added to queryParams if ''
    interface QueryParams {
      [key: string]: any
    }

    var queryParams: QueryParams = {};

    queryParams.pageNumber = 1;
    if (this.search !== '') queryParams.search = this.search
    if (this.categoryType !== '') queryParams.categoryType = this.categoryType
    if (this.productType !== '') queryParams.productType = this.productType

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: queryParams,
      queryParamsHandling: 'merge'
    });

    // this.router.navigate([], {
    //   relativeTo: this.route,
    //   queryParams: { 
    //     pageNumber: 1, 
    //     search: this.search, 
    //     categoryType: this.categoryType, 
    //     productType: this.productType 
    //   },
    //   queryParamsHandling: 'merge'
    // });

    if (this.pageNumber === undefined) this.pageNumber = 1;
    if (this.search === undefined) this.search = "";
    if (this.categoryType === undefined) this.categoryType = "";
    if (this.productType === undefined) this.productType = "";

    this.productsService.getSearchProducts(this.search, 1, this.categoryType, this.productType)
      .subscribe((products) => this.products = products);
  }

  nextPage(pageIndex: number) {
    const nextPage = pageIndex + 1;

    this.router.navigate([], { 
      relativeTo: this.route, 
      queryParams: { pageNumber: nextPage }, 
      queryParamsHandling: 'merge'
    });

    if (this.search === undefined) this.search = "";
    if (this.categoryType === undefined) this.categoryType = "";
    if (this.productType === undefined) this.productType = "";

    this.productsService.getSearchProducts(this.search, nextPage, this.categoryType, this.productType)
      .subscribe((products) => this.products = products);
  }

  previousPage(pageIndex: number) {
    const previousPage = pageIndex - 1;

    this.router.navigate([], { 
      relativeTo: this.route, 
      queryParams: { pageNumber: previousPage }, 
      queryParamsHandling: 'merge'
    });

    if (this.search === undefined) this.search = "";
    if (this.categoryType === undefined) this.categoryType = "";
    if (this.productType === undefined) this.productType = "";

    this.productsService.getSearchProducts(this.search, previousPage, this.categoryType, this.productType)
      .subscribe((products) => this.products = products);
  }

  clearSearch() {
    this.pageNumber = 1;
    this.search = "";
    this.categoryType = "";
    this.productType = "";

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { pageNumber: 1 }
    });

    this.productsService.getSearchProducts(
      this.search, 
      this.pageNumber, 
      this.categoryType,
      this.productType).subscribe((products) => this.products = products);
  }

  clearSearchItem() {

    // the params won't be added to queryParams if ''
    interface QueryParams {
      [key: string]: any
    }

    var queryParams: QueryParams = {};

    queryParams.pageNumber = 1;
    if (this.search !== '') queryParams.search = this.search
    if (this.categoryType !== '') queryParams.categoryType = this.categoryType
    if (this.productType !== '') queryParams.productType = this.productType

    // reroutes based on the custom queryParam
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: queryParams 
    });

    if (this.pageNumber === undefined) this.pageNumber = 1;
    if (this.search === undefined) this.search = "";
    if (this.categoryType === undefined) this.categoryType = "";
    if (this.productType === undefined) this.productType = "";

    this.productsService.getSearchProducts(this.search, 1, this.categoryType, this.productType)
      .subscribe((products) => this.products = products);
  }

}