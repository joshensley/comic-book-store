import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interface/product/Product';
import { ProductService } from 'src/app/services/admin/product.service';
import { faEdit } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-product-specification-value',
  templateUrl: './product-specification-value.component.html',
  styleUrls: ['./product-specification-value.component.css']
})
export class ProductSpecificationValueComponent implements OnInit {
  products: Product[] = [];
  faEdit = faEdit;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe((products) => this.products = products);
  }

}
