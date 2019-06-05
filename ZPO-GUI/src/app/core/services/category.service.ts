import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';


@Injectable()
export class CategoryService {
    constructor(private http: HttpClient) {
    }

    private categoryUrl = 'http://localhost:8000/api/categories/';

    getCategories(): Observable<Object> {
        return this.http.get(this.categoryUrl)
    }

    addCategory(category: Category): Observable<Object> {
        return this.http.post(this.categoryUrl, category)
    }

    updateCategory(category: Category): Observable<Object> {
        return this.http.put(this.categoryUrl + category.id, category)
    }

    deleteCategory(category: Category): Observable<Object> {
        return this.http.delete(this.categoryUrl + category.id)
    }


}