import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WarehouseService } from 'app/core/services/warehouse.service';
import { CategoryService } from 'app/core/services/category.service';
import { HttpClientModule } from '@angular/common/http'; 
import { CategoryComponent } from './category/category.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { WarehouseEditComponent } from './warehouse/warehouse-edit.component';
import { CategoryEditComponent } from './category/category-edit.component';
import { ProductComponent } from './product/product.component';
import { ProductEditComponent } from './product/product-edit.component';
import { ProductService } from 'app/core/services/product.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MainRoutingModule,
        NgbModule,
        HttpClientModule
    ],
    declarations: [
        MainComponent, CategoryComponent, WarehouseComponent, WarehouseEditComponent, CategoryEditComponent, ProductComponent, ProductEditComponent
    ],
    providers: [
        CategoryService, WarehouseService, ProductService
    ],
    entryComponents: [
        WarehouseEditComponent, CategoryEditComponent, ProductEditComponent
    ]
})


export class MainModule { }