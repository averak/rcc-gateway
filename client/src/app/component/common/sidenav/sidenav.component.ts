import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from 'src/app/model/product-model';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  @Input() product!: ProductModel;

  constructor() {}

  ngOnInit(): void {}
}
