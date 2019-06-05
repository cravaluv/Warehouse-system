import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'app/core/services/category.service';
import { Category } from 'app/core/models/category.model';


@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
})

export class CategoryComponent implements OnInit {

    constructor(private categoryService: CategoryService) {

    }

    public categories: Category[] = [];

    ngOnInit(): void {

        this.categoryService.getCategories().subscribe((data) => {
            this.categories = data as Category[];
            console.log(this.categories)
        });

    }
}
