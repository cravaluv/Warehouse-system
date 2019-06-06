import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Category } from 'app/core/models/category.model';
import { CategoryService } from 'app/core/services/category.service';
import { Warehouse } from 'app/core/models/warehouse.model';
import { Product } from 'app/core/models/product.model';
import { ProductService } from 'app/core/services/product.service';

@Component({
    selector: 'app-product-edit',
    templateUrl: './product-edit.component.html',
})
export class ProductEditComponent implements OnInit {

    @Input() model: Product;
    @Input() warehouses: Warehouse[];
    @Input() categories: Category[];
    @Input() mode: 'NEW' | 'EDIT';

    modelCopy: Product;

    constructor(private activeModal: NgbActiveModal, private productService: ProductService) {
    }

    ngOnInit(): void {
        this.mode === 'NEW' ? this.modelCopy = new Product() : this.modelCopy = _.clone(this.model);
    }

    onSubmit() {
        if (this.mode === 'NEW') {
            this.productService.addProduct(this.modelCopy).subscribe(
                res => {
                    this.activeModal.close();
                },
                err => {
                    console.log("Error occured");
                }
            );
        } else {
            this.productService.updateProduct(this.modelCopy).subscribe(
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