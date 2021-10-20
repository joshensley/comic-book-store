import { Component, OnInit } from '@angular/core';

import { ProductInventoryUnitService } from 'src/app/services/admin/product-inventory-unit.service';
import { ProductService } from 'src/app/services/admin/product.service';
import { Product } from 'src/app/interface/product/Product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product-inventory-unit',
  templateUrl: './create-product-inventory-unit.component.html',
  styleUrls: ['./create-product-inventory-unit.component.css']
})
export class CreateProductInventoryUnitComponent implements OnInit {
  products: Product[];

  quantity: number;
  productId: number;
  inStock: boolean = true;

  constructor(
    private productInventoryUnitService: ProductInventoryUnitService,
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  onSubmit() {

    const newProductInventoryUnit = {
      productId: this.productId,
      inStock: this.inStock
    };

    this.productInventoryUnitService.postProductInventoryUnits(newProductInventoryUnit, this.quantity)
      .subscribe(() => {
        
        const queryParams = {
          notification: true,
          message: "Products added to Inventory",
          actionType: 'created' 
        };

        this.router.navigate(['/admin/product-inventory-unit'], { queryParams: queryParams });
        
      });
  }
}
