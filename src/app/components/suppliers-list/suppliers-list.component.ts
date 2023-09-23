import { Component } from '@angular/core';
import { SupplierService } from 'src/app/core/supplier.service';
import { Supplier } from 'src/app/models/supplier.model';

const supplierService = new SupplierService()
@Component({
  selector: 'app-suppliers-list',
  templateUrl: './suppliers-list.component.html',
  styleUrls: ['./suppliers-list.component.css']
})
export class SuppliersListComponent {
  suppliers: Supplier[] = supplierService.getSuppliers();
}
