import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsContentComponent } from './items-content.component';

describe('ItemsContentComponent', () => {
  let component: ItemsContentComponent;
  let fixture: ComponentFixture<ItemsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemsContentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
