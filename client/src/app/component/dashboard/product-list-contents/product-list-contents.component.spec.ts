import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListContentsComponent } from './product-list-contents.component';

describe('ProductListContentsComponent', () => {
  let component: ProductListContentsComponent;
  let fixture: ComponentFixture<ProductListContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductListContentsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
