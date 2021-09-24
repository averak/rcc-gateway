import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProductModel } from 'src/app/model/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductResolverService {
  products: ProductModel[] = environment.products;

  constructor() {}

  getProductInfo(url: string): ProductModel {
    return this.products.filter((prod) => prod.url == url)[0];
  }

  getProducts(): ProductModel[] {
    return this.products;
  }
}