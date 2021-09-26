import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/model/product.model';
import { ProductResolverService } from 'src/app/shared/service/product-resolver.service';

@Component({
  selector: 'app-rdid',
  templateUrl: './rdid.component.html',
  styleUrls: ['./rdid.component.css'],
})
export class RdidComponent implements OnInit {
  product!: ProductModel;

  constructor(private productResolverService: ProductResolverService) {}

  ngOnInit(): void {
    this.product = this.productResolverService.getProductInfo('/rdid');
  }
}
