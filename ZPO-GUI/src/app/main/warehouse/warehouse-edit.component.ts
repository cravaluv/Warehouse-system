import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';
import { Warehouse } from 'app/core/models/warehouse.model';
import { WarehouseService } from 'app/core/services/warehouse.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-warehouse-edit',
    templateUrl: './warehouse-edit.component.html',
})
export class WarehouseEditComponent implements OnInit {

    @Input() model: Warehouse;
    @Input() mode: 'NEW' | 'EDIT';

    modelCopy: Warehouse;

    constructor(private activeModal: NgbActiveModal, private warehouseService: WarehouseService) {
    }

    ngOnInit(): void {
        this.mode === 'NEW' ? this.modelCopy = new Warehouse() : this.modelCopy = _.clone(this.model);
    }

    onSubmit() {
        if (this.mode === 'NEW') {
            this.warehouseService.addWarehouse(this.modelCopy).subscribe(
                res => {
                    this.activeModal.close();
                },
                err => {
                    console.log("Error occured");
                }
            );
        } else {
            this.warehouseService.updateWarehouse(this.modelCopy).subscribe(
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