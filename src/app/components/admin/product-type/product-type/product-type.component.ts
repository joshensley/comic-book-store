import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductTypeService } from 'src/app/services/admin/product-type.service';
import { ProductType } from 'src/app/interface/product/ProductType';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-type',
  templateUrl: './product-type.component.html',
  styleUrls: ['./product-type.component.css']
})
export class ProductTypeComponent implements OnInit {
  productTypes: ProductType[] = [];
  faTrash = faTrash;
  faEdit = faEdit;
  name: string;
  isActive: boolean;
  actionType: string;
  notification: boolean;

  constructor(
    private productTypeService: ProductTypeService, 
    private route: ActivatedRoute) { 
      this.route.queryParams.subscribe(params => {
        this.name = params['name'];
        this.isActive = params['isActive'];
        this.actionType = params['actionType'];
        this.notification = params['notification'];
      });
    }

  ngOnInit(): void {
    this.productTypeService.getProductTypes()
      .subscribe((productTypes) => { this.productTypes = productTypes });
  }

}
