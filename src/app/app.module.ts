import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuard } from './services/auth/auth-guard.service';
import { AuthAdminGuard } from './services/auth/auth-admin-guard.service';

import { AppComponent } from './app.component';
import { PrivacyComponent } from './components/site-information/privacy/privacy.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { NavbarComponent } from './components/fragment/navbar-footer/navbar/navbar.component';
import { IndexHomeComponent } from './components/main/home/index-home/index-home.component';
import { ProductItemComponent } from './components/fragment/products/product-item/product-item.component';
import { ProductsComponent } from './components/fragment/products/products/products.component';
import { CategoryTypeComponent } from './components/admin/category-type/category-type/category-type.component';
import { CreateCategoryTypeComponent } from './components/admin/category-type/create-category-type/create-category-type.component';
import { DeleteCategoryTypeComponent } from './components/admin/category-type/delete-category-type/delete-category-type.component';
import { UpdateCategoryTypeComponent } from './components/admin/category-type/update-category-type/update-category-type.component';
import { ProductTypeComponent } from './components/admin/product-type/product-type/product-type.component';
import { CreateProductTypeComponent } from './components/admin/product-type/create-product-type/create-product-type.component';
import { DeleteProductTypeComponent } from './components/admin/product-type/delete-product-type/delete-product-type.component';
import { UpdateProductTypeComponent } from './components/admin/product-type/update-product-type/update-product-type.component';
import { ProductComponent } from './components/admin/product/product/product.component';
import { CreateProductComponent } from './components/admin/product/create-product/create-product.component';
import { UpdateProductComponent } from './components/admin/product/update-product/update-product.component';
import { DeleteProductComponent } from './components/admin/product/delete-product/delete-product.component';
import { ProductSpecificationComponent } from './components/admin/product-specification/product-specification/product-specification.component';
import { CreateProductSpecificationComponent } from './components/admin/product-specification/create-product-specification/create-product-specification.component';
import { UpdateProductSpecificationComponent } from './components/admin/product-specification/update-product-specification/update-product-specification.component';
import { DeleteProductSpecificationComponent } from './components/admin/product-specification/delete-product-specification/delete-product-specification.component';
import { LogoutComponent } from './components/auth/logout/logout/logout.component';
import { ProductSpecificationValueComponent } from './components/admin/product-specification-value/product-specification-value/product-specification-value.component';
import { UpdateProductSpecificationValueComponent } from './components/admin/product-specification-value/update-product-specification-value/update-product-specification-value.component';
import { ProductImageComponent } from './components/admin/product-image/product-image/product-image.component';
import { CreateProductImageComponent } from './components/admin/product-image/create-product-image/create-product-image.component';
import { DeleteProductImageComponent } from './components/admin/product-image/delete-product-image/delete-product-image.component';
import { OffcanvasIndexHomeComponent } from './components/main/home/offcanvas-index-home/offcanvas-index-home.component';
import { SearchBarIndexHomeComponent } from './components/main/home/search-bar-index-home/search-bar-index-home.component';
import { ProductInventoryUnitComponent } from './components/admin/product-inventory-unit/product-inventory-unit/product-inventory-unit.component';
import { CreateProductInventoryUnitComponent } from './components/admin/product-inventory-unit/create-product-inventory-unit/create-product-inventory-unit.component';
import { DeleteProductInventoryUnitComponent } from './components/admin/product-inventory-unit/delete-product-inventory-unit/delete-product-inventory-unit.component';
import { IndexProductComponent } from './components/main/product-page/index-product/index-product.component';
import { IndexCartComponent } from './components/main/cart-page/index-cart/index-cart.component';
import { IndexCheckOutComponent } from './components/main/check-out-page/index-check-out/index-check-out.component';

export function tokenGetter() {
  return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
    PrivacyComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    IndexHomeComponent,
    ProductItemComponent,
    ProductsComponent,
    CategoryTypeComponent,
    CreateCategoryTypeComponent,
    DeleteCategoryTypeComponent,
    UpdateCategoryTypeComponent,
    ProductTypeComponent,
    CreateProductTypeComponent,
    DeleteProductTypeComponent,
    UpdateProductTypeComponent,
    ProductComponent,
    CreateProductComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    ProductSpecificationComponent,
    CreateProductSpecificationComponent,
    UpdateProductSpecificationComponent,
    DeleteProductSpecificationComponent,
    LogoutComponent,
    ProductSpecificationValueComponent,
    UpdateProductSpecificationValueComponent,
    ProductImageComponent,
    CreateProductImageComponent,
    DeleteProductImageComponent,
    OffcanvasIndexHomeComponent,
    SearchBarIndexHomeComponent,
    ProductInventoryUnitComponent,
    CreateProductInventoryUnitComponent,
    DeleteProductInventoryUnitComponent,
    IndexProductComponent,
    IndexCartComponent,
    IndexCheckOutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:44328'],
        blacklistedRoutes: []
      }
    }),
  ],
  providers: [AuthGuard, AuthAdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
