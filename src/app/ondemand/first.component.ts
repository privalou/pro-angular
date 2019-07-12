import {Component} from '@angular/core';
import {Product} from '../model/product.model';
import {RestDataSource} from '../model/rest.datasource';

@Component({
  selector: 'pa-first',
  templateUrl: 'first.component.html'
})
export class FirstComponent {
  _category = 'Soccer';
  _products: Product[] = [];
  highlighted = false;

  constructor(public datasource: RestDataSource) {
  }

  ngOnInit() {
    this.updateData();
  }

  getProducts(): Product[] {
    return this._products;
  }

  set category(newValue: string) {
    this._category;
    this.updateData();
  }

  updateData() {
    this.datasource.getData()
      .subscribe(data => this._products = data
        .filter(p => p.category === this._category));
  }
}
