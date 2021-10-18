import { Component, OnInit } from '@angular/core';
import { CategoryTypeService } from 'src/app/services/admin/category-type.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-category-type',
  templateUrl: './create-category-type.component.html',
  styleUrls: ['./create-category-type.component.css']
})
export class CreateCategoryTypeComponent implements OnInit {
  name: string;
  isActive: boolean = false;

  constructor(
    private categoryTypeService: CategoryTypeService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.name) {
      alert('Please add a category type!');
      return;
    }
    
    const newCategoryType = {
      name: this.name,
      isActive: this.isActive
    }

    this.categoryTypeService.createCategoryTypes(newCategoryType)
      .subscribe((categoryType) => {

        const queryParams = {
          notification: true,
          name: categoryType.name,
          isActive: categoryType.isActive,
          actionType: 'created'
        }

        this.router.navigate(['/admin/category-type'], { queryParams: queryParams });
      });
  }

}
