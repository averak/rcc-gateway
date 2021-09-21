import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicPathComponent } from './topic-path.component';

describe('TopicPathComponent', () => {
  let component: TopicPathComponent;
  let fixture: ComponentFixture<TopicPathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopicPathComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
