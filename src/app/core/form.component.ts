import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Product} from '../model/product.model';
import {Model} from '../model/repository.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'pa-form',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.css']
})
export class FormComponent {
  product: Product = new Product();

  constructor(private model: Model, activeRoute: ActivatedRoute,
              private router: Router) {
    this.editing = activeRoute.snapshot.params.mode === 'edit';
    const id = activeRoute.snapshot.params.id;
    if (id != null) {
      const name = activeRoute.snapshot.params.name;
      const category = activeRoute.snapshot.params.category;
      const price = activeRoute.snapshot.params.price;
      if (name != null && category != null && price != null) {
        this.product.id = id;
        this.product.name = name;
        this.product.category = category;
        this.product.price = Number.parseFloat(price);
      } else {
        Object.assign(this.product, model.getProduct(id) || new Product());
      }
    }
  }

  editing = false;

  submitForm(form: NgForm) {
    if (form.valid) {
      this.model.saveProduct(this.product);
      this.router.navigateByUrl('/');
    }
  }

  resetForm() {
    this.product = new Product();
  }
}
