import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdidComponent } from '@rdid/rdid.component';

describe('RdidComponent', () => {
  let component: RdidComponent;
  let fixture: ComponentFixture<RdidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RdidComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
