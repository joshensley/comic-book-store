import { Component, OnInit } from '@angular/core';
import { CategoryTypeService } from 'src/app/services/admin/category-type.service';
import { CategoryType } from '../../../../interface/product/CategoryType';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-category-type',
  templateUrl: './delete-category-type.component.html',
  styleUrls: ['./delete-category-type.component.css']
})
export class DeleteCategoryTypeComponent implements OnInit {
  categoryType: CategoryType | undefined = undefined;
  id: string | undefined;

  constructor(
    private categoryTypeServices: CategoryTypeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.router.url.split('/').pop();

    this.categoryTypeServices.getCategoryTypeById(id)
      .subscribe((categoryType) => {
        this.id = categoryType.id?.toString();
        this.categoryType = categoryType;
      });
  }

  onSubmit() {
    this.categoryTypeServices.deleteCategoryType(this.id)
      .subscribe((categoryType) => {
        
        const queryParams = {
          notification: true,
          name: categoryType.name,
          isActive: categoryType.isActive,
          actionType: 'deleted'
        };

        this.router.navigate(['/admin/category-type'], { queryParams: queryParams });
      });
  }

}
