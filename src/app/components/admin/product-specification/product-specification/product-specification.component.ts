import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductTypeService } from 'src/app/services/admin/product-type.service';
import { ProductTypeWithProductSpecifications } from 'src/app/interface/product/ProductType'; 
import { faTrash, faEdit, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-specification',
  templateUrl: './product-specification.component.html',
  styleUrls: ['./product-specification.component.css']
})
export class ProductSpecificationComponent implements OnInit {
  productTypes: ProductTypeWithProductSpecifications[] = [];
  faPlus = faPlus;
  faTrash = faTrash;
  faEdit = faEdit;

  constructor(
    private productTypeService: ProductTypeService, 
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.productTypeService.getProductTypesWithProductSpecifications()
      .subscribe((productTypes) => { this.productTypes = productTypes });
  }

}
