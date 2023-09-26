import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SupplierDetailsComponent } from './components/supplier-details/supplier-details.component';
import { SuppliersListComponent } from './components/suppliers-list/suppliers-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { UsersComponent } from './components/users/users.component';
import { UsersListComponent } from './components/users-list/users-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SupplierDetailsComponent,
    SuppliersListComponent,
    NavbarComponent,
    HeaderComponent,
    UsersComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
