import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class WarehouseService {
    constructor(private http: HttpClient) {
    }

    private warehouseUrl = 'http://127.0.0.1:8000/api/warehouses/';

    getWarehouses(): Observable<Object> {
        return this.http.get(this.warehouseUrl)
    }


}