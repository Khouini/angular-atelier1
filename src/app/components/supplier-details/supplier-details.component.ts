import { Component, Input } from '@angular/core';
import { SupplierService } from 'src/app/core/supplier.service';
import { Supplier } from 'src/app/models/supplier.model';
const supplierService = new SupplierService();
@Component({
  selector: 'app-supplier-details',
  templateUrl: './supplier-details.component.html',
  styleUrls: ['./supplier-details.component.css'],
})
export class SupplierDetailsComponent {
  hide: boolean = false;
  @Input() supplier: Supplier = {};

  setHidden(): void {
    this.hide = true;
  }

  getCodeFontWeight(): string {
    return this.supplier.code?.startsWith('2A') ? 'bold' : 'normal';
  }
}
