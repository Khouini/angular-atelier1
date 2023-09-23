import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SupplierDetailsComponent } from './components/supplier-details/supplier-details.component';
import { SuppliersListComponent } from './components/suppliers-list/suppliers-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SupplierDetailsComponent,
    SuppliersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
