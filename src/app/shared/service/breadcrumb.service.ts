import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Data, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { BreadcrumbModel } from '@model/breadcrumb.model';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  breadcrumbs = new BehaviorSubject<BreadcrumbModel[]>([]);

  constructor(private router: Router) {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((_) => {
      const root = this.router.routerState.snapshot.root;
      const breadcrumbs: BreadcrumbModel[] = [];
      this.addBreadcrumb(root, [], breadcrumbs);

      this.breadcrumbs.next(breadcrumbs);
    });
  }

  getBreadCrumbs(): Observable<BreadcrumbModel[]> {
    return this.breadcrumbs.asObservable();
  }

  private addBreadcrumb(
    route: ActivatedRouteSnapshot,
    parentUrl: string[],
    breadcrumbs: BreadcrumbModel[]
  ) {
    if (route) {
      const routeUrl = parentUrl.concat(route.url.map((url) => url.path));

      if (route.data.breadcrumb) {
        const breadcrumb = {
          label: this.getLabel(route.data),
          url: '/' + routeUrl.join('/'),
        };
        breadcrumbs.push(breadcrumb);
      }

      if (route.firstChild) {
        this.addBreadcrumb(route.firstChild, routeUrl, breadcrumbs);
      }
    }
  }

  private getLabel(data: Data) {
    return typeof data.breadcrumb === 'function' ? data.breadcrumb(data) : data.breadcrumb;
  }
}
