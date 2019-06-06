import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';


@Injectable()
export class ProductService {
    constructor(private http: HttpClient) {
    }

    private productUrl = 'http://localhost:8000/api/products/';

    getProducts(): Observable<Object> {
        return this.http.get(this.productUrl)
    }

    addProduct(product: Product): Observable<Object> {
        return this.http.post(this.productUrl, product)
    }

    updateProduct(product: Product): Observable<Object> {
        return this.http.put(this.productUrl + product.id, product)
    }

    deleteProduct(product: Product): Observable<Object> {
        return this.http.delete(this.productUrl + product.id)
    }


}