import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseOrdersHistoriesComponent } from './purchase-orders-histories.component';

describe('PurchaseOrdersHistoriesComponent', () => {
  let component: PurchaseOrdersHistoriesComponent;
  let fixture: ComponentFixture<PurchaseOrdersHistoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurchaseOrdersHistoriesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseOrdersHistoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
