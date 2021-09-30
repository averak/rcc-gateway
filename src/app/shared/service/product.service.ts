import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ProductModel } from 'src/app/model/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: ProductModel[] = environment.products;
  product = new BehaviorSubject<ProductModel>({} as ProductModel);

  constructor(private router: Router) {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((_) => {
      const root = this.router.routerState.snapshot.root;

      this.searchProduct(root);
    });
  }

  getProduct(): Observable<ProductModel> {
    return this.product.asObservable();
  }

  private searchProduct(route: ActivatedRouteSnapshot) {
    if (route) {
      const product = this.getProductInfo(`/${route.url}`);
      if (product) {
        this.product.next(product);
        return;
      }
      if (route.firstChild) {
        this.searchProduct(route.firstChild);
      } else {
        this.product.next(this.getProductInfo('/dashboard'));
      }
    }
  }

  private getProductInfo(url: string): ProductModel {
    return this.products.filter((prod) => prod.url == url)[0];
  }
}
