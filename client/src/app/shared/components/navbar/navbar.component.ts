import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from 'src/app/model/product-model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Input() product!: ProductModel;

  constructor() {}

  ngOnInit(): void {}
}
