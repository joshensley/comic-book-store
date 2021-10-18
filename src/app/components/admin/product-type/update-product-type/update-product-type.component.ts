import { Component, OnInit } from '@angular/core';
import { ProductTypeService } from 'src/app/services/admin/product-type.service';
import { ProductType } from 'src/app/interface/product/ProductType';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-product-type',
  templateUrl: './update-product-type.component.html',
  styleUrls: ['./update-product-type.component.css']
})
export class UpdateProductTypeComponent implements OnInit {
  productType: ProductType | undefined = undefined;
  id: number | undefined;
  name: string;
  isActive: boolean;

  constructor(
    private productTypeService: ProductTypeService, 
    private router: Router) { }

  ngOnInit(): void {
    const id = this.router.url.split('/').pop();

    this.productTypeService.getProductTypeById(id)
      .subscribe((productType) => {
        this.productType = productType;
        this.id = productType.id;
        this.name = productType.name;
        this.isActive = productType.isActive;
      });
  }

  onSubmit() {
    if (!this.name) {
      alert('Please add a product type!');
      return;
    }

    const editProductType = {
      id: this.id,
      name: this.name,
      isActive: this.isActive
    };
    
    this.productTypeService.editProductType(this.id, editProductType)
      .subscribe((productType) => {

        const queryParams = {
          notification: true,
          name: productType.name,
          isActive: productType.isActive,
          actionType: 'edited'
        };

        this.router.navigate(['/admin/product-type'], { queryParams: queryParams });
      })
  }
}
