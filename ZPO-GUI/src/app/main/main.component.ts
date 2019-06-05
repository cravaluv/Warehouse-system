import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'app/core/services/category.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})

export class MainComponent implements OnInit {

  constructor(private categoryService: CategoryService) {

  }

  ngOnInit(): void {

    this.categoryService.getCategories().subscribe();

  }
}