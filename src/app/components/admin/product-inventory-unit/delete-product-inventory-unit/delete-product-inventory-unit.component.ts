import { Component, OnInit } from '@angular/core';
import { ProductInventoryUnitService } from 'src/app/services/admin/product-inventory-unit.service';
import { ProductInventoryUnit } from 'src/app/interface/product/ProductInventoryUnit';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-product-inventory-unit',
  templateUrl: './delete-product-inventory-unit.component.html',
  styleUrls: ['./delete-product-inventory-unit.component.css']
})
export class DeleteProductInventoryUnitComponent implements OnInit {
  productInventoryUnit: ProductInventoryUnit | undefined;
  id: string | undefined;

  constructor(
    private productInventorysUnitService: ProductInventoryUnitService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.router.url.split('/').pop();

    this.productInventorysUnitService.getProductInventoryUnitById(id)
      .subscribe((productInventoryUnit) => { 
        this.id = productInventoryUnit.id?.toString();
        this.productInventoryUnit = productInventoryUnit
      });
  }

  onSubmit() {

    this.productInventorysUnitService.deleteProductInventoryUnitById(this.id)
      .subscribe(() => {

        const queryParams = {
          notification: true,
          message: "The inventory item was deleted",
          actionType: 'deleted' 
        };

        this.router.navigate(['/admin/product-inventory-unit'], { queryParams: queryParams });
      });
  }

  

}
