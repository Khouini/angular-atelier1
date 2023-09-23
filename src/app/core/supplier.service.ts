import { Injectable } from '@angular/core';
import { Supplier } from '../models/supplier.model';
const supplier = new Supplier(105, 'A104B89', 'Mytek');

const suppliers = [
  new Supplier(1, '1ABC4522', 'hp') || {},
  new Supplier(2, '2ABC4522', 'dell') || {},
  new Supplier(3, '3ABC4522', 'lenovo') || {},
  new Supplier(400, '40ABC452', 'asus') || {},
];
@Injectable({
  providedIn: 'root',
})
export class SupplierService {
  constructor() {}
  getSupplier(): Supplier {
    return supplier;
  }

  getSuppliers(): Supplier[] {
    return suppliers;
  }

  deleteSupplier(supplierId: number): void {
    const indexToDelete = suppliers.findIndex(
      (supplier) => supplier.id === supplierId
    );
    if (indexToDelete !== -1) {
      suppliers.splice(indexToDelete, 1);
    }
  }
}
