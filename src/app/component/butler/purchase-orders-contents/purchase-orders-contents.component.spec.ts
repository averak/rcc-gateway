import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseOrdersContentsComponent } from '@butler/purchase-orders-contents/purchase-orders-contents.component';

describe('PurchaseOrdersContentsComponent', () => {
  let component: PurchaseOrdersContentsComponent;
  let fixture: ComponentFixture<PurchaseOrdersContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurchaseOrdersContentsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseOrdersContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
