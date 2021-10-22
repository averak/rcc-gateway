import { Component, OnInit } from '@angular/core';
import { PurchaseOrderModel } from 'src/app/model/butler.model';

@Component({
  selector: 'app-purchase-orders-histories',
  templateUrl: './purchase-orders-histories.component.html',
  styleUrls: ['./purchase-orders-histories.component.css'],
})
export class PurchaseOrdersHistoriesComponent implements OnInit {
  purchaseOrders!: PurchaseOrderModel[];

  constructor() {}

  ngOnInit(): void {
    // mock objects
    this.purchaseOrders = [
      {
        id: 0,
        title: 'プログラミング言語図鑑',
        description: '様々なプログラミング言語の概要とサンプルを紹介している技術書です。',
        isApproved: true,
        userId: 'user1@abelab.dev',
        createdAt: new Date(),
        price: 1848,
        url: 'https://www.amazon.co.jp/dp/4802611080/ref=cm_sw_em_r_mt_dp_WV3W244KC7JE65FWE61B',
        isPurchased: false,
      },
      {
        id: 0,
        title: 'USBマイク',
        description: '安価なコンデンサマイクで、リモート会議などで利用する予定。',
        isApproved: true,
        userId: 'user2@abelab.dev',
        createdAt: new Date(),
        price: 3911,
        url: 'https://www.amazon.co.jp/dp/B085S58MLQ/ref=cm_sw_r_tw_dp_9Q604V2GT4SHWQ09DKV1',
        isPurchased: true,
      },
    ];
  }

  handlePurchaseOrderEdit(purchaseOrder: PurchaseOrderModel): void {}

  handlePurchaseOrderDelete(purchaseOrder: PurchaseOrderModel): void {}
}
