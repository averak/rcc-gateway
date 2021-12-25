import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButlerComponent } from '@butler/butler.component';

describe('ButlerComponent', () => {
  let component: ButlerComponent;
  let fixture: ComponentFixture<ButlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButlerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
