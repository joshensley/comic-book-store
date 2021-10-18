import { Component, OnInit } from '@angular/core';
import { ProductTypeService } from 'src/app/services/admin/product-type.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product-type',
  templateUrl: './create-product-type.component.html',
  styleUrls: ['./create-product-type.component.css']
})
export class CreateProductTypeComponent implements OnInit {
  name: string;
  isActive: boolean = false;

  constructor(
    private productTypeService: ProductTypeService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.name) {
      alert('Please add a product type!');
      return;
    }

    const newProductType = {
      name: this.name,
      isActive: this.isActive
    }

    this.productTypeService.createProductType(newProductType)
      .subscribe((productType) => {

        const queryParams = {
          notification: true,
          name: productType.name,
          isActive: productType.isActive,
          actionType: 'created'
        };

        this.router.navigate(['/admin/product-type'], {queryParams: queryParams });
      })
  }
}
