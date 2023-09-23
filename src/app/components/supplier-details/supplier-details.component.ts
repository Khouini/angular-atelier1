import { Component } from '@angular/core';
import { SupplierService } from 'src/app/core/supplier.service';
import { Supplier } from 'src/app/shared/supplier.model';
const supplierService = new SupplierService();
@Component({
  selector: 'app-supplier-details',
  templateUrl: './supplier-details.component.html',
  styleUrls: ['./supplier-details.component.css'],
})
export class SupplierDetailsComponent {
  supplier?: Supplier = supplierService.getSupplier();
}
