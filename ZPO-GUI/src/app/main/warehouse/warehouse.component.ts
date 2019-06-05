import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'app/core/services/category.service';
import { Category } from 'app/core/models/category.model';
import { Warehouse } from 'app/core/models/warehouse.model';
import { WarehouseService } from 'app/core/services/warehouse.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WarehouseEditComponent } from './warehouse-edit.component';


@Component({
    selector: 'app-warehouse',
    templateUrl: './warehouse.component.html',
})

export class WarehouseComponent implements OnInit {

    constructor(private warehouseService: WarehouseService, private modalService: NgbModal) {

    }

    public warehouses: Warehouse[] = [];

    ngOnInit(): void {

        this.warehouseService.getWarehouses().subscribe((data) => {
            this.warehouses = data as Warehouse[];
        });

    }

    add() {
        const modal = this.modalService.open(WarehouseEditComponent);
        modal.componentInstance.mode = 'NEW';

        modal.result.then((result) => {
            this.warehouseService.getWarehouses().subscribe((data) => {
                this.warehouses = data as Warehouse[];
            });
        }, (reason) => {
        });
    }

    update(warehouse: Warehouse) {
        const modal = this.modalService.open(WarehouseEditComponent);
        modal.componentInstance.model = warehouse;
        modal.componentInstance.mode = 'EDIT';

        modal.result.then((result) => {
            this.warehouseService.getWarehouses().subscribe((data) => {
                this.warehouses = data as Warehouse[];
            });
        }, (reason) => {
        });
    }

    delete(warehouse: Warehouse) {
        this.warehouseService.deleteWarehouse(warehouse).subscribe((data) => {
            this.warehouseService.getWarehouses().subscribe((data) => {
                this.warehouses = data as Warehouse[];
            });
        });
    }
}
