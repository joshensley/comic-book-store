import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ProductTypeService } from 'src/app/services/admin/product-type.service';
import { ProductSpecificationService } from 'src/app/services/admin/product-specification.service';
import { ProductTypeWithProductSpecifications } from 'src/app/interface/product/ProductType';

@Component({
  selector: 'app-create-product-specification',
  templateUrl: './create-product-specification.component.html',
  styleUrls: ['./create-product-specification.component.css']
})
export class CreateProductSpecificationComponent implements OnInit {
  productType: ProductTypeWithProductSpecifications;
  name: string;
  productTypeId: number | undefined;

  @ViewChild('myul') ul: ElementRef;

  constructor(
    private productTypeService: ProductTypeService,
    private productSpecificationService: ProductSpecificationService,
    private router: Router,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    const id = this.router.url.split('/').pop();

    this.productTypeService.getProductTypeByIdWithProductSpecifications(id)
      .subscribe((productType) => { 
        this.productType = productType;
        this.productTypeId = productType.id;
      });
  }

  onSubmit() {
    if (!this.name) {
      alert('Please add a product specification!');
      return;
    }

    const newProductSpecification = {
      productTypeId: this.productTypeId,
      name: this.name,
      productType: undefined
    }

    this.productSpecificationService.createProductSpecification(newProductSpecification)
      .subscribe((productSpecification) => {

        const li: HTMLLIElement = this.renderer.createElement('li');
        li.innerHTML = productSpecification.name;
        li.className = 'list-group-item'
        this.renderer.appendChild(this.ul.nativeElement, li);
      });
  }
}
