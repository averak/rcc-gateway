import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Data, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  private readonly _title = new BehaviorSubject<string>('');

  readonly title = this._title.asObservable();

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        const root = this.router.routerState.snapshot.root;

        this.getTitle(root, []);
      });
  }

  private getTitle(route: ActivatedRouteSnapshot, parentUrl: string[]) {
    if (route) {
      const routeUrl = parentUrl.concat(route.url.map((url) => url.path));

      if (route.firstChild) {
        this.getTitle(route.firstChild, routeUrl);
      } else {
        this._title.next(route.data.title);
      }
    }

    return '';
  }
}
