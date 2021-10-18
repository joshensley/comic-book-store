import { Component, OnInit } from '@angular/core';
import { ProductTypeService } from 'src/app/services/admin/product-type.service';
import { ProductType } from 'src/app/interface/product/ProductType';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-product-type',
  templateUrl: './delete-product-type.component.html',
  styleUrls: ['./delete-product-type.component.css']
})
export class DeleteProductTypeComponent implements OnInit {
  productType: ProductType | undefined = undefined;
  id: string | undefined

  constructor(
    private productTypeService: ProductTypeService, 
    private router: Router) { }

  ngOnInit(): void {
    const id = this.router.url.split('/').pop();

    this.productTypeService.getProductTypeById(id)
      .subscribe((productType) => {
        this.id = productType.id?.toString();
        this.productType = productType;
      });
  }

  onSubmit() {
    this.productTypeService.deleteProductType(this.id)
      .subscribe((productType) => {

        const queryParams = {
          notification: true,
          name: productType.name,
          isActive: productType.isActive,
          actionType: 'deleted'
        };

        this.router.navigate(['/admin/product-type'], { queryParams: queryParams });
      });
  }

}
