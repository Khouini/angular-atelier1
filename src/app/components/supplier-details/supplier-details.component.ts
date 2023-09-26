import { Component, Input } from '@angular/core';
import { SupplierService } from 'src/app/core/supplier.service';
import { Supplier } from 'src/app/models/supplier.model';
@Component({
  selector: 'app-supplier-details',
  templateUrl: './supplier-details.component.html',
  styleUrls: ['./supplier-details.component.css'],
})
export class SupplierDetailsComponent {
  hide: boolean = false;
  @Input() supplier: Supplier = {};

  constructor(private supplierService: SupplierService) {}
  setHidden(): void {
    this.hide =!this.hide;
  }

  getCodeFontWeight(): string {
    return this.supplier.code?.startsWith('2A') ? 'bold' : 'normal';
  }

  getBackgroundColor(): string {
    return this.supplier.label === 'hp' ? 'green' : 'yellow';
  }

  deleteSupplier(supplierId: number): void {
    this.supplierService.deleteSupplier(supplierId);
  }
}
