import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductsService } from 'src/app/services/fragment/products/products.service';
import { ActivatedRoute } from '@angular/router';
import { faFilter, faRedo, faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-search-bar-index-home',
  templateUrl: './search-bar-index-home.component.html',
  styleUrls: ['./search-bar-index-home.component.css']
})
export class SearchBarIndexHomeComponent implements OnInit {
  @Output() onClearSearch: EventEmitter<any> = new EventEmitter();
  @Output() onClearSearchItem: EventEmitter<any> = new EventEmitter();
  faFilter = faFilter;
  faRedo = faRedo;
  faTimes = faTimes;

  search: string = "";
  productType: string = "";
  categoryType: string = "";

  constructor(
    private produtsService: ProductsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.search = params['search'];
      this.productType = params['productType'];
      this.categoryType = params['categoryType'];
    });
  }

  clearSearch() {
    this.onClearSearch.emit();
  }

  clearSearchItem(searchItem: string) {

    switch(searchItem) {
      case 'search':
        this.produtsService.searchProductName("");
        break;
      case 'productType':
        this.produtsService.searchProductType("");
        break;
      case 'categoryType':
        this.produtsService.searchCategoryType("");
        break;
      default:
    }

    // emits to index-home.component.html
    this.onClearSearchItem.emit();
  }
}
