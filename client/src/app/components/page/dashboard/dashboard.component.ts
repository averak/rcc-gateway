import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProductModel } from 'src/app/model/product-model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  product: ProductModel = environment.products.filter((prod) => prod.link == '/dashboard')[0];

  constructor() {}

  ngOnInit(): void {}
}
