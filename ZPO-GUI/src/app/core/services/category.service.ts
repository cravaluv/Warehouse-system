import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class CategoryService {
    constructor(private http: HttpClient) {
    }

    private categoryUrl = 'http://localhost:8000/api/categories/';

    getCategories(): Observable<Object> {
        return this.http.get(this.categoryUrl)
    }


}