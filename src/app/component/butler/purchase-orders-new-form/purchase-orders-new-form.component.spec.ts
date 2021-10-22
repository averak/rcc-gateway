import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseOrdersNewFormComponent } from './purchase-orders-new-form.component';

describe('PurchaseOrdersNewFormComponent', () => {
  let component: PurchaseOrdersNewFormComponent;
  let fixture: ComponentFixture<PurchaseOrdersNewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurchaseOrdersNewFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseOrdersNewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
