import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'app/core/services/category.service';
import { Category } from 'app/core/models/category.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryEditComponent } from './category-edit.component';


@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
})

export class CategoryComponent implements OnInit {

    constructor(private categoryService: CategoryService, private modalService: NgbModal) {

    }

    public categories: Category[] = [];

    ngOnInit(): void {

        this.categoryService.getCategories().subscribe((data) => {
            this.categories = data as Category[];
            console.log(this.categories)
        });

    }

    add() {
        const modal = this.modalService.open(CategoryEditComponent);
        modal.componentInstance.mode = 'NEW';

        modal.result.then((result) => {
            this.categoryService.getCategories().subscribe((data) => {
                this.categories = data as Category[];
            });
        }, (reason) => {
        });
    }

    update(category: Category) {
        const modal = this.modalService.open(CategoryEditComponent);
        modal.componentInstance.model = category;
        modal.componentInstance.mode = 'EDIT';

        modal.result.then((result) => {
            this.categoryService.getCategories().subscribe((data) => {
                this.categories = data as Category[];
            });
        }, (reason) => {
        });
    }

    delete(category: Category) {
        this.categoryService.deleteCategory(category).subscribe((data) => {
            this.categoryService.getCategories().subscribe((data) => {
                this.categories = data as Category[];
            });
        });
    }
}
