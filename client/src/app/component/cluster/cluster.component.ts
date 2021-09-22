import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/model/product-model';
import { ProductResolverService } from 'src/app/shared/service/product-resolver.service';

@Component({
  selector: 'app-cluster',
  templateUrl: './cluster.component.html',
  styleUrls: ['./cluster.component.css'],
})
export class ClusterComponent implements OnInit {
  product!: ProductModel;

  constructor(private productResolverService: ProductResolverService) {}

  ngOnInit(): void {
    this.product = this.productResolverService.getProductInfo('/cluster');
  }
}
