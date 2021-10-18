import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/admin/product.service';
import { Product } from 'src/app/interface/product/Product';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  faTrash = faTrash;
  faEdit = faEdit;
  name: string;
  isActive: string;
  actionType: string;
  notification: boolean;


  constructor(
    private productService: ProductService, 
    private route: ActivatedRoute) {
      this.route.queryParams.subscribe(params => {
        this.name = params['name'];
        this.isActive = params['isActive'];
        this.actionType = params['actionType'];
        this.notification = params['notification'];
      })
    }

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe((products) => this.products = products);
  }
}
