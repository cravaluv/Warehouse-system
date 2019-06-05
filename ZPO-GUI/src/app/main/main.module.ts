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

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MainRoutingModule,
        NgbModule,
        HttpClientModule
    ],
    declarations: [
        MainComponent, CategoryComponent, WarehouseComponent, WarehouseEditComponent, CategoryEditComponent
    ],
    providers: [
        CategoryService, WarehouseService
    ],
    entryComponents: [
        WarehouseEditComponent, CategoryEditComponent
    ]
})


export class MainModule { }