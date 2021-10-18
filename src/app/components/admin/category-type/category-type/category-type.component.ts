import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryTypeService } from 'src/app/services/admin/category-type.service';
import { CategoryType } from '../../../../interface/product/CategoryType';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-category-type',
  templateUrl: './category-type.component.html',
  styleUrls: ['./category-type.component.css']
})
export class CategoryTypeComponent implements OnInit {
  categoryTypes: CategoryType[] = [];
  faTrash = faTrash;
  faEdit = faEdit;
  name: string;
  isActive: boolean
  actionType: string;
  notification: boolean;

  constructor(
    private categoryTypeService: CategoryTypeService,
    private route: ActivatedRoute
  ) { 
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
      this.isActive = params['isActive'];
      this.actionType = params['actionType'];
      this.notification = params['notification'];
    });
  }

  ngOnInit(): void {
    this.categoryTypeService.getCategoryTypes()
      .subscribe((categoryTypes) => { this.categoryTypes = categoryTypes });
  }

}
