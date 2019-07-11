import {Product} from './product.model';
import {Inject, Injectable, InjectionToken} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export const REST_URL = new InjectionToken('rest_url');

@Injectable()
export class RestDataSource {
  constructor(private http: HttpClient,
              @Inject(REST_URL) private url: string) {
  }

  getData(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }
}
