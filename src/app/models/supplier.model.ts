export class Supplier {
  id?: number;
  code?: string;
  label?: string;

  constructor(id?: number, code?: string, label?: string) {
    this.id = id;
    this.code = code;
    this.label = label;
  }
}
