import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'app/core/services/category.service';
import { Category } from 'app/core/models/category.model';
import { Warehouse } from 'app/core/models/warehouse.model';
import { WarehouseService } from 'app/core/services/warehouse.service';


@Component({
    selector: 'app-warehouse',
    templateUrl: './warehouse.component.html',
})

export class WarehouseComponent implements OnInit {

    constructor(private warehouseService: WarehouseService) {

    }

    public warehouses: Warehouse[] = [];

    ngOnInit(): void {

        this.warehouseService.getWarehouses().subscribe((data) => {
            this.warehouses = data as Warehouse[];
        });

    }
}
