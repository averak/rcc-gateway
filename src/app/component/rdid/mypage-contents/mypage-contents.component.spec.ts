import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MypageContentsComponent } from './mypage-contents.component';

describe('MypageContentsComponent', () => {
  let component: MypageContentsComponent;
  let fixture: ComponentFixture<MypageContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MypageContentsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MypageContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
