import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/admin/product.service';
import { Product } from 'src/app/interface/product/Product';
import { ProductImageService } from 'src/app/services/admin/product-image.service';
import { ProductImage } from 'src/app/interface/product/ProductImage';
import { Router } from '@angular/router';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-create-product-image',
  templateUrl: './create-product-image.component.html',
  styleUrls: ['./create-product-image.component.css']
})
export class CreateProductImageComponent implements OnInit {
  product: Product | undefined = undefined;
  productImages: ProductImage[] = [];

  productId: any;
  fileUpload: File;

  faTrash = faTrash;

  constructor(
    private productService: ProductService,
    private productImageService: ProductImageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.router.url.split('/').pop();

    this.productService.getProductById(id)
      .subscribe((product) => {
        this.product = product;
        this.productId = product.id?.toString();
      });

    this.productImageService.getProductImagesByProductId(id)
      .subscribe((productImages) => {
        this.productImages = productImages;
      });
  }

  // When a picture is added
  onChange(event: any) {
    this.fileUpload = event.target.files[0];
  }

  onSubmit() {

    let input = new FormData();
    input.append('ProductId', this.productId);
    input.append('FileUpload', this.fileUpload);

    this.productImageService.postProductImage(input)
      .subscribe((productImage) => {
        this.productImages = [...this.productImages, productImage];
      });

  }

  onDelete(id: number) {
    console.log(id);

    this.productImageService.deleteProductImage(id)
      .subscribe((productImageId) => {
        this.productImages = [...this.productImages.filter(p => p.id !== productImageId)]
      });
  }
}
