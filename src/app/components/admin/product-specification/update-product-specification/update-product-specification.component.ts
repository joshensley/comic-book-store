import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductTypeService } from 'src/app/services/admin/product-type.service';
import { ProductSpecificationService } from 'src/app/services/admin/product-specification.service';
import { ProductTypeWithProductSpecifications } from 'src/app/interface/product/ProductType';

@Component({
  selector: 'app-update-product-specification',
  templateUrl: './update-product-specification.component.html',
  styleUrls: ['./update-product-specification.component.css']
})
export class UpdateProductSpecificationComponent implements OnInit {
  productType: ProductTypeWithProductSpecifications;
  name: string;
  actionType: string;
  notification: boolean;

  constructor(
    private productTypeService: ProductTypeService,
    private productSpecificationServce: ProductSpecificationService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
      this.actionType = params['actionType'];
      this.notification = params['notification'];
    })
  }

  ngOnInit(): void {
    const id = this.router.url.split('/').pop();

    this.productTypeService.getProductTypeByIdWithProductSpecifications(id)
      .subscribe((productType) => this.productType = productType);
  }

  onSubmit() {

    this.productSpecificationServce.editProductSpecification(this.productType.id, this.productType)
      .subscribe((productType) => {

        const queryParams = {
          notification: true,
          name: productType.name,
          actionType: 'edited'
        };

        this.router.navigate([`/admin/edit-product-specification/${this.productType.id}`], {queryParams: queryParams });

      });
  }

}
