import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PageNotFoundComponent } from './not-found.component';
import { FormsModule } from '@angular/forms';
import { MainModule } from './main/main.module';

@NgModule({
   declarations: [
      AppComponent,
      PageNotFoundComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      NgbModule.forRoot(),
      FormsModule,
      MainModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
