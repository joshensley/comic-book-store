import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/admin/product.service';
import { Product } from 'src/app/interface/product/Product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  product: Product | undefined = undefined;
  id: string | undefined;

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.router.url.split('/').pop();

    this.productService.getProductById(id)
      .subscribe((product) => {
        this.id = product.id?.toString();
        this.product = product;
      });
  }

  onSubmit() {
    this.productService.deleteProduct(this.id)
      .subscribe((product) => {

        const queryParams = {
          notification: true,
          name: product.name,
          isActive: product.isActive,
          actionType: 'deleted'
        };

        this.router.navigate(['/admin/product'], { queryParams: queryParams });
      });
  }

}
