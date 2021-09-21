import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductVersionChipComponent } from './product-version-chip.component';

describe('ProductVersionChipComponent', () => {
  let component: ProductVersionChipComponent;
  let fixture: ComponentFixture<ProductVersionChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductVersionChipComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductVersionChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
