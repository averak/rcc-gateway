import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KiriTansuComponent } from '@kiri-tansu/kiri-tansu.component';

describe('KiriTansuComponent', () => {
  let component: KiriTansuComponent;
  let fixture: ComponentFixture<KiriTansuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KiriTansuComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KiriTansuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
