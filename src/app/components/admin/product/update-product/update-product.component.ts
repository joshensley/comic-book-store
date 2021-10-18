import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/admin/product.service';
import { Product } from 'src/app/interface/product/Product';
import { ProductTypeService } from 'src/app/services/admin/product-type.service';
import { ProductType } from 'src/app/interface/product/ProductType';
import { CategoryTypeService } from 'src/app/services/admin/category-type.service';
import { CategoryType } from 'src/app/interface/product/CategoryType';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  product: Product | undefined = undefined;
  productTypes: ProductType[] | undefined = undefined;
  categoryTypes: CategoryType[] | undefined = undefined;
  id: string | undefined;
  name: string;
  description: string;
  regularPrice: number;
  discountPrice: number;
  isActive: boolean;
  categoryTypeId: number;
  productTypeId: number; 


  constructor(
    private productService: ProductService,
    private productTypeService: ProductTypeService,
    private categoryTypeService: CategoryTypeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.router.url.split('/').pop();

    this.productTypeService.getProductTypes().subscribe((productTypes) => {
      this.productTypes = productTypes;
    });

    this.categoryTypeService.getCategoryTypes().subscribe((categoryTypes) => {
      this.categoryTypes = categoryTypes;
    });

    this.productService.getProductById(id).subscribe((product) => {
      this.product = product;
      this.id = id;
      this.name = product.name;
      this.description = product.description;
      this.regularPrice = product.regularPrice;
      this.discountPrice = product.discountPrice;
      this.isActive = product.isActive;
      this.categoryTypeId = product.productTypeId;
      this.productTypeId = product.productTypeId;
    });
  }

  onSubmit() {
    const editProduct = {
      id: this.id,
      name: this.name,
      description: this.description,
      regularPrice: this.regularPrice,
      discountPrice: this.discountPrice,
      isActive: this.isActive,
      categoryTypeId: this.categoryTypeId,
      productTypeId: this.productTypeId 
    }

    console.log(editProduct);

    this.productService.editProduct(this.id, editProduct).subscribe((product) => {
      const queryParams = {
        notification: true,
        name: product.name,
        isActive: product.isActive,
        actionType: 'edited'
      };

      this.router.navigate(['/admin/product'], { queryParams: queryParams });
    })
  }

}
