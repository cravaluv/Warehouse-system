import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Category } from 'app/core/models/category.model';
import { CategoryService } from 'app/core/services/category.service';

@Component({
    selector: 'app-category-edit',
    templateUrl: './category-edit.component.html',
})
export class CategoryEditComponent implements OnInit {

    @Input() model: Category;
    @Input() mode: 'NEW' | 'EDIT';

    modelCopy: Category;

    constructor(private activeModal: NgbActiveModal, private categoryService: CategoryService) {
    }

    ngOnInit(): void {
        this.mode === 'NEW' ? this.modelCopy = new Category() : this.modelCopy = _.clone(this.model);
    }

    onSubmit() {
        if (this.mode === 'NEW') {
            this.categoryService.addCategory(this.modelCopy).subscribe(
                res => {
                    this.activeModal.close();
                },
                err => {
                    console.log("Error occured");
                }
            );
        } else {
            this.categoryService.updateCategory(this.modelCopy).subscribe(
                res => {
                    this.activeModal.close();
                },
                err => {
                    console.log("Error occured");
                }
            );
        }
    }

    onDismiss() {
        this.activeModal.dismiss();
    }



}