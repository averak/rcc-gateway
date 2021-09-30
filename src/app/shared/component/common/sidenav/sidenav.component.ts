import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from 'src/app/model/product.model';
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  @Input() product!: ProductModel;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProduct().subscribe((product) => {
      this.product = product;
    });
  }
}
