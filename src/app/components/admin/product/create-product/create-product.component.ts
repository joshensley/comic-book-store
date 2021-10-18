import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/admin/product.service';
import { CategoryTypeService } from 'src/app/services/admin/category-type.service';
import { CategoryType } from 'src/app/interface/product/CategoryType';
import { ProductTypeService } from 'src/app/services/admin/product-type.service';
import { ProductType } from 'src/app/interface/product/ProductType';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  categoryTypes: CategoryType[];
  productTypes: ProductType[];
  name: string;
  description: string;
  regularPrice: number;
  discountPrice: number;
  isActive: boolean = false;
  categoryTypeId: number;
  productTypeId: number; 

  constructor(
    private productService: ProductService,
    private categoryTypeService: CategoryTypeService, 
    private productTypeService: ProductTypeService,
    private router: Router) { }

  ngOnInit(): void {
    this.categoryTypeService.getCategoryTypes().subscribe((categoryTypes) => {
      this.categoryTypes = categoryTypes;
    })

    this.productTypeService.getProductTypes().subscribe((productTypes) => {
      this.productTypes = productTypes;
    })
  }

  onSubmit() {

    const newProduct = {
      name: this.name,
      description: this.description,
      regularPrice: this.regularPrice,
      discountPrice: this.discountPrice,
      isActive: this.isActive,
      categoryTypeId: this.categoryTypeId,
      productTypeId: this.productTypeId
    };

    this.productService.createProduct(newProduct).subscribe((product) => {
      
      const queryParams = {
        notification: true,
        name : product.name,
        isActive: product.name,
        actionType: 'created'
      };

      this.router.navigate(['/admin/product'], { queryParams: queryParams });
    });

  }

}
