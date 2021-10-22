import { Component, OnInit } from '@angular/core';
import { PurchaseOrderRequest } from 'src/app/request/butler.request';

@Component({
  selector: 'app-purchase-orders-new-form',
  templateUrl: './purchase-orders-new-form.component.html',
  styleUrls: ['./purchase-orders-new-form.component.css'],
})
export class PurchaseOrdersNewFormComponent implements OnInit {
  requestBody = {} as PurchaseOrderRequest;

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {}

  onCancel(): void {}
}
