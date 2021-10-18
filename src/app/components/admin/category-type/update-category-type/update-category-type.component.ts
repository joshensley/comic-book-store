import { Component, OnInit } from '@angular/core';
import { CategoryTypeService } from 'src/app/services/admin/category-type.service';
import { CategoryType } from '../../../../interface/product/CategoryType';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-category-type',
  templateUrl: './update-category-type.component.html',
  styleUrls: ['./update-category-type.component.css']
})
export class UpdateCategoryTypeComponent implements OnInit {
  categoryType: CategoryType | undefined = undefined;
  id: number | undefined;
  name: string;
  isActive: boolean;

  constructor(
    private categoryTypeServices: CategoryTypeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.router.url.split('/').pop();

    this.categoryTypeServices.getCategoryTypeById(id)
      .subscribe((categoryType) => {
        this.categoryType = categoryType;
        this.id = categoryType.id;
        this.name = categoryType.name;
        this.isActive = categoryType.isActive;
      });
  }

  onSubmit() {
    if (!this.name) {
      alert('Please add a category type!');
      return;
    }

    const editCategoryType = {
      id: this.id,
      name: this.name,
      isActive: this.isActive
    };

    this.categoryTypeServices.editCategoryType(this.id, editCategoryType)
      .subscribe((categoryType) => {
        
        const queryParams = {
          notification: true,
          name: categoryType.name,
          isActive: categoryType.isActive,
          actionType: 'edited'
        };

        this.router.navigate(['/admin/category-type'], { queryParams: queryParams });
      });
  }
}
