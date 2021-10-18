import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interface/product/Product';
import { ProductService } from 'src/app/services/admin/product.service';
import { ProductSpecificationValueService } from 'src/app/services/admin/product-specification-value.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-product-specification-value',
  templateUrl: './update-product-specification-value.component.html',
  styleUrls: ['./update-product-specification-value.component.css']
})
export class UpdateProductSpecificationValueComponent implements OnInit {
  product: Product | undefined;
  actionType: string;
  notification: boolean;

  constructor(
    private productService: ProductService,
    private productSpecificationValueService: ProductSpecificationValueService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(params => {
      this.actionType = params['actionType'];
      this.notification = params['notification'];
    })
   }

  ngOnInit(): void {
    const id = this.router.url.split('/').pop();

    this.productService.getProductDetailsById(id)
      .subscribe((product) => this.product = product );
  }

  onSubmit() {
    this.productSpecificationValueService.editProduct(this.product?.id, this.product)
      .subscribe(() => {

        const queryParams = {
          notification: true,
          actionType: 'edited'
        };

        this.router.navigate(
          [`/admin/edit-product-specification-value/${this.product?.id}`], 
          { queryParams: queryParams });

      });
  }
}