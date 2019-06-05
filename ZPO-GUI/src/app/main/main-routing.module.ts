import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { CategoryComponent } from './category/category.component';
import { WarehouseComponent } from './warehouse/warehouse.component';


const routes: Routes = [

  {
    path: 'app',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'categories', pathMatch: 'full' },

      {
        path: 'categories',
        component: CategoryComponent,
      },
      {
        path: 'warehouses',
        component: WarehouseComponent,
      },
    //   {
    //     path: 'pets',
    //     component: PetComponent,
    //     canActivate: [RoleGuard],
    //     data: {
    //       expectedRole: 'employee'
    //     }
    //   },
    //   {
    //     path: 'visits',
    //     component: VisitComponent,
    //     canActivate: [RoleGuard],
    //     data: {
    //       expectedRole: 'employee'
    //     }
    //   },
    //   {
    //     path: 'personnel',
    //     component: PersonnelComponent,
    //     canActivate: [RoleGuard],
    //     data: {
    //       expectedRole: 'admin'
    //     }
    //   },
    //   {
    //     path: 'schedule',
    //     component: ScheduleComponent,
    //     canActivate: [RoleGuard],
    //     data: {
    //       expectedRole: 'employee'
    //     }
    //   },
    //   {
    //     path: 'customer',
    //     component: CustomerComponent,
    //     canActivate: [AuthGuard],
    //     data: {
    //       expectedRole: 'customer'
    //     }
    //   },
    //   {
    //     path: 'my-pets',
    //     component: OwnPetsComponent,
    //     canActivate: [RoleGuard],
    //     data: {
    //       expectedRole: 'customer'
    //     }
    //   }
      // {
      //   path: 'reservation',
      //   component: AddVisitComponent,
      //   canActivate: [RoleGuard],
      //   data: {
      //     expectedRole: 'customer'
      //   }
      // }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }