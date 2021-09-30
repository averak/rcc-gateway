import { Component, OnInit } from '@angular/core';
import { BreadcrumbModel } from 'src/app/model/breadcrumb.model';
import { BreadcrumbService } from 'src/app/shared/service/breadcrumb.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css'],
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs!: BreadcrumbModel[];

  constructor(private breadcrumbService: BreadcrumbService) {}

  ngOnInit(): void {
    this.breadcrumbService
      .getBreadCrumbs()
      .subscribe((breadcrumbs) => (this.breadcrumbs = breadcrumbs));
  }
}
