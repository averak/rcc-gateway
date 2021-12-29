import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProductModel } from '@model/product.model';

@Component({
  selector: 'app-product-list-contents',
  templateUrl: './product-list-contents.component.html',
  styleUrls: ['./product-list-contents.component.css'],
})
export class ProductListContentsComponent implements OnInit {
  products: ProductModel[] = environment.products;

  constructor() {}

  ngOnInit(): void {
    // プロダクト名でソート
    this.products.sort((a, b) => a.title.localeCompare(b.title, 'ja'));
  }
}
