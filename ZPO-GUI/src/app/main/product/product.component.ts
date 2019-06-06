import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'app/core/services/category.service';
import { Category } from 'app/core/models/category.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from 'app/core/services/product.service';
import { Product } from 'app/core/models/product.model';
import { WarehouseService } from 'app/core/services/warehouse.service';
import { Warehouse } from 'app/core/models/warehouse.model';
import { ProductEditComponent } from './product-edit.component';


@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
})

export class ProductComponent implements OnInit {

    constructor(private productService: ProductService, private categorySerive: CategoryService, 
        private warehouseService: WarehouseService, private modalService: NgbModal) {

    }

    public products: Product[] = [];
    public warehouses: Warehouse[] = [];
    public categories: Category[] = [];

    ngOnInit(): void {
        this.productService.getProducts().subscribe((data) => {
            this.products = data as Product[];
        });
        this.categorySerive.getCategories().subscribe((data) => {
            this.categories = data as Category[];
        });
        this.warehouseService.getWarehouses().subscribe((data) => {
            this.warehouses = data as Warehouse[];
        });
    }

    add() {
        const modal = this.modalService.open(ProductEditComponent);
        modal.componentInstance.categories = this.categories;
        modal.componentInstance.warehouses = this.warehouses;
        modal.componentInstance.mode = 'NEW';

        modal.result.then((result) => {
            this.productService.getProducts().subscribe((data) => {
                this.products = data as Product[];
            });
        }, (reason) => {
        });
    }

    update(product: Product) {
        const modal = this.modalService.open(ProductEditComponent);
        modal.componentInstance.categories = this.categories;
        modal.componentInstance.warehouses = this.warehouses;
        modal.componentInstance.model = product;
        modal.componentInstance.mode = 'EDIT';

        modal.result.then((result) => {
            this.productService.getProducts().subscribe((data) => {
                this.products = data as Product[];
            });
        }, (reason) => {
        });
    }

    delete(product: Product) {
        this.productService.deleteProduct(product).subscribe((data) => {
            this.productService.getProducts().subscribe((data) => {
                this.products = data as Product[];
            });
        });
    }
}
