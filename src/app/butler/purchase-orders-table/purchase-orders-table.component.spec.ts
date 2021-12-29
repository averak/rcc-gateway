import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseOrdersTableComponent } from '@butler/purchase-orders-table/purchase-orders-table.component';

describe('PurchaseOrdersTableComponent', () => {
  let component: PurchaseOrdersTableComponent;
  let fixture: ComponentFixture<PurchaseOrdersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurchaseOrdersTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseOrdersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
