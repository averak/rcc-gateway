import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ProductModel } from 'src/app/model/product.model';
import { ProductResolverService } from 'src/app/shared/service/product-resolver.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly _product = new BehaviorSubject<ProductModel>({} as ProductModel);

  constructor(private router: Router, private productResolverService: ProductResolverService) {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((_) => {
      const root = this.router.routerState.snapshot.root;

      this.searchProduct(root);
    });
  }

  getProduct(): Observable<ProductModel> {
    return this._product.asObservable();
  }

  private searchProduct(route: ActivatedRouteSnapshot) {
    if (route) {
      const product = this.productResolverService.getProductInfo(`/${route.url}`);
      if (product) {
        this._product.next(product);
        return;
      }
      if (route.firstChild) {
        this.searchProduct(route.firstChild);
      } else {
        this._product.next(this.productResolverService.getProductInfo('/dashboard'));
      }
    }
  }
}
