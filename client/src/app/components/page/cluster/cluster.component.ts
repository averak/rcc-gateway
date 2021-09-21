import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProductModel } from 'src/app/model/product-model';

@Component({
  selector: 'app-cluster',
  templateUrl: './cluster.component.html',
  styleUrls: ['./cluster.component.css'],
})
export class ClusterComponent implements OnInit {
  product: ProductModel = environment.products.filter((prod) => prod.link == '/cluster')[0];

  constructor() {}

  ngOnInit(): void {}
}
