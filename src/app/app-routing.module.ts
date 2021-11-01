import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Auth Routes
import { AuthGuard } from './services/auth/auth-guard.service';
import { AuthAdminGuard } from './services/auth/auth-admin-guard.service';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LogoutComponent } from './components/auth/logout/logout/logout.component';

// Main Routes
import { IndexHomeComponent } from './components/main/home/index-home/index-home.component';
import { PrivacyComponent } from './components/site-information/privacy/privacy.component';
import { IndexProductComponent } from './components/main/product-page/index-product/index-product.component';

// Admin Routes
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
import { DeleteProductComponent } from './components/admin/product/delete-product/delete-product.component';
import { UpdateProductComponent } from './components/admin/product/update-product/update-product.component';
import { ProductSpecificationComponent } from './components/admin/product-specification/product-specification/product-specification.component';
import { CreateProductSpecificationComponent } from './components/admin/product-specification/create-product-specification/create-product-specification.component';
import { DeleteProductSpecificationComponent } from './components/admin/product-specification/delete-product-specification/delete-product-specification.component';
import { UpdateProductSpecificationComponent } from './components/admin/product-specification/update-product-specification/update-product-specification.component';
import { ProductSpecificationValueComponent } from './components/admin/product-specification-value/product-specification-value/product-specification-value.component';
import { UpdateProductSpecificationValueComponent } from './components/admin/product-specification-value/update-product-specification-value/update-product-specification-value.component';
import { ProductImageComponent } from './components/admin/product-image/product-image/product-image.component';
import { CreateProductImageComponent } from './components/admin/product-image/create-product-image/create-product-image.component';
import { DeleteProductImageComponent } from './components/admin/product-image/delete-product-image/delete-product-image.component';
import { ProductInventoryUnitComponent } from './components/admin/product-inventory-unit/product-inventory-unit/product-inventory-unit.component';
import { CreateProductInventoryUnitComponent } from './components/admin/product-inventory-unit/create-product-inventory-unit/create-product-inventory-unit.component';
import { DeleteProductInventoryUnitComponent } from './components/admin/product-inventory-unit/delete-product-inventory-unit/delete-product-inventory-unit.component';

const routes: Routes = [
  // Main Routes
  { path: '', component: IndexHomeComponent },
  { path: 'product/:id', component: IndexProductComponent },
  { path: 'privacy', component: PrivacyComponent, canActivate: [AuthGuard] },
  // Auth Routes
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'logout', component: LogoutComponent },
  // Admin Routes
  { path: 'admin/category-type', component: CategoryTypeComponent, canActivate: [AuthAdminGuard] },
  { path: 'admin/create-category-type', component: CreateCategoryTypeComponent, canActivate: [AuthAdminGuard] },
  { path: 'admin/delete-category-type/:id', component: DeleteCategoryTypeComponent, canActivate: [AuthAdminGuard] },
  { path: 'admin/edit-category-type/:id', component: UpdateCategoryTypeComponent, canActivate: [AuthAdminGuard] },
  { path: 'admin/product-type', component: ProductTypeComponent, canActivate: [AuthAdminGuard] },
  { path: 'admin/create-product-type', component: CreateProductTypeComponent, canActivate: [AuthAdminGuard] },
  { path: 'admin/delete-product-type/:id', component: DeleteProductTypeComponent, canActivate: [AuthAdminGuard] },
  { path: 'admin/edit-product-type/:id', component: UpdateProductTypeComponent, canActivate: [AuthAdminGuard] },
  { path: 'admin/product', component: ProductComponent, canActivate: [AuthAdminGuard] },
  { path: 'admin/create-product', component: CreateProductComponent, canActivate: [AuthAdminGuard] },
  { path: 'admin/delete-product/:id', component: DeleteProductComponent, canActivate: [AuthAdminGuard] },
  { path: 'admin/edit-product/:id', component: UpdateProductComponent, canActivate: [AuthAdminGuard] },
  { path: 'admin/product-specification', component: ProductSpecificationComponent, canActivate: [AuthAdminGuard] },
  { path: 'admin/create-product-specification/:id', component: CreateProductSpecificationComponent, canActivate: [AuthAdminGuard] },
  { path: 'admin/delete-product-specification/:id', component: DeleteProductSpecificationComponent, canActivate: [AuthAdminGuard] },
  { path: 'admin/edit-product-specification/:id', component: UpdateProductSpecificationComponent, canActivate: [AuthAdminGuard] },
  { path: 'admin/product-specification-value', component: ProductSpecificationValueComponent, canActivate: [AuthAdminGuard] },
  { path: 'admin/edit-product-specification-value/:id', component: UpdateProductSpecificationValueComponent, canActivate: [AuthAdminGuard] },
  { path: 'admin/product-image', component: ProductImageComponent, canActivate: [AuthAdminGuard] },
  { path: 'admin/create-product-image/:id', component: CreateProductImageComponent, canActivate: [AuthAdminGuard] },
  { path: 'admin/delete-product-image/:id', component: DeleteProductImageComponent, canActivate: [AuthAdminGuard] },
  { path: 'admin/product-inventory-unit', component: ProductInventoryUnitComponent, canActivate: [AuthAdminGuard] },
  { path: 'admin/create-product-inventory-unit', component: CreateProductInventoryUnitComponent, canActivate: [AuthAdminGuard] },
  { path: 'admin/delete-product-inventory-unit/:id', component: DeleteProductInventoryUnitComponent, canActivate: [AuthAdminGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
