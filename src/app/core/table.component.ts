import {Component} from '@angular/core';
import {Product} from '../model/product.model';
import {Model} from '../model/repository.model';

@Component({
  selector: 'pa-table',
  templateUrl: 'table.component.html'
})
export class TableComponent {
  constructor(private model: Model) {
  }

  getProduct(key: number): Product {
    return this.model.getProduct(key);
  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }

  deleteProduct(key: number) {
    this.model.deleteProduct(key);
  }
}
