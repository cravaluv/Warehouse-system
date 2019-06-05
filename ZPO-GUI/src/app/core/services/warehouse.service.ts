import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Warehouse } from '../models/warehouse.model';

@Injectable()
export class WarehouseService {
    constructor(private http: HttpClient) {
    }

    private warehouseUrl = 'http://127.0.0.1:8000/api/warehouses/';

    getWarehouses(): Observable<Object> {
        return this.http.get(this.warehouseUrl)
    }

    addWarehouse(warehouse: Warehouse): Observable<Object> {
        return this.http.post(this.warehouseUrl, warehouse)
    }

    updateWarehouse(warehouse: Warehouse): Observable<Object> {
        return this.http.put(this.warehouseUrl + warehouse.id, warehouse)
    }

    deleteWarehouse(warehouse: Warehouse): Observable<Object> {
        return this.http.delete(this.warehouseUrl + warehouse.id)
    }


}