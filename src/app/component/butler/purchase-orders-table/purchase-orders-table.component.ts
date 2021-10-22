import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  OnChanges,
  SimpleChanges,
  AfterViewInit,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PurchaseOrderModel } from 'src/app/model/butler.model';

@Component({
  selector: 'app-purchase-orders-table',
  templateUrl: './purchase-orders-table.component.html',
  styleUrls: ['./purchase-orders-table.component.css'],
})
export class PurchaseOrdersTableComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() purchaseOrders: PurchaseOrderModel[] = [];

  @Output() purchaseOrderEdit = new EventEmitter<PurchaseOrderModel>();
  @Output() purchaseOrderDelete = new EventEmitter<PurchaseOrderModel>();

  columns: string[] = [
    'title',
    'description',
    'price',
    'url',
    'username',
    'isApproved',
    'isPurchased',
    'control',
  ];
  dataSource!: MatTableDataSource<PurchaseOrderModel>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<PurchaseOrderModel>(this.purchaseOrders);
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.purchaseOrders !== undefined) {
      this.purchaseOrders = changes.purchaseOrders.currentValue;
      this.ngOnInit();
    }
  }

  onClickEdit(purchaseOrder: PurchaseOrderModel): void {
    this.purchaseOrderEdit.emit(purchaseOrder);
  }

  onClickDelete(purchaseOrder: PurchaseOrderModel): void {
    this.purchaseOrderDelete.emit(purchaseOrder);
  }
}
