import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchProduct } from 'src/app/interface/main/search/SearchProduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() products: SearchProduct | undefined;
  @Output() onNextPage: EventEmitter<number> = new EventEmitter();
  @Output() onPreviousPage: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  nextPageClick() {
    this.onNextPage.emit();
  }

  previousPageClick() {
    this.onPreviousPage.emit();
  }

}
