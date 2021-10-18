import { Component, OnInit, Renderer2, ViewChildren, ElementRef, ViewChild, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ProductTypeService } from 'src/app/services/admin/product-type.service';
import { ProductSpecificationService } from 'src/app/services/admin/product-specification.service';
import { ProductTypeWithProductSpecifications } from 'src/app/interface/product/ProductType';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-delete-product-specification',
  templateUrl: './delete-product-specification.component.html',
  styleUrls: ['./delete-product-specification.component.css']
})
export class DeleteProductSpecificationComponent implements OnInit {
  productType: ProductTypeWithProductSpecifications;
  name: string;
  productTypeId: number | undefined;

  faTrash = faTrash;

  @ViewChild('myul') ul: ElementRef;

  constructor(
    private productTypeService: ProductTypeService,
    private productSpecificationService: ProductSpecificationService,
    private router: Router,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: any
  ) { }

  ngOnInit(): void {
    const id = this.router.url.split('/').pop();

    this.productTypeService.getProductTypeByIdWithProductSpecifications(id)
      .subscribe((productType) => {
        this.productType = productType;
        this.productTypeId = productType.id;
      });
  }

  onDelete(id: number) {
    if (confirm('Are you sure you want to delete?')) {
      this.productSpecificationService.deleteProductSpecification(id)
      .subscribe(() => {
        const listItemId = 'list-item-' + id;
        const ulDocument = this.document.getElementById(listItemId).remove();
      });
    }
  }
}
