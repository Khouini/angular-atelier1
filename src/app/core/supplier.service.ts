import { Injectable } from '@angular/core';
import { Supplier } from '../shared/supplier.model';
const supplier = new Supplier(105, 'A104B89', 'Mytek');
@Injectable({
  providedIn: 'root',
})
export class SupplierService {
  constructor() {}
  getSupplier(): Supplier {
    return supplier;
  }
}
