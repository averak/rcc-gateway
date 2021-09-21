import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/model/product-model';
import { ProductResolverService } from 'src/app/shared/service/product-resolver.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  product!: ProductModel;

  constructor(private productResolverService: ProductResolverService) {}

  ngOnInit(): void {
    this.product = this.productResolverService.getProductInfo('/dashboard');
  }
}
