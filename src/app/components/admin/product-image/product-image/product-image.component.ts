import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/admin/product.service';
import { Product } from 'src/app/interface/product/Product';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent implements OnInit {
  products: Product[] = [];
  faPlus = faPlus;
  faTrash = faTrash;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe((products) => this.products = products);
  }

}
