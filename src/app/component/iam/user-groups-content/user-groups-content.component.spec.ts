import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGroupsContentComponent } from '@iam/user-groups-content/user-groups-content.component';

describe('UserGroupsContentComponent', () => {
  let component: UserGroupsContentComponent;
  let fixture: ComponentFixture<UserGroupsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserGroupsContentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGroupsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
