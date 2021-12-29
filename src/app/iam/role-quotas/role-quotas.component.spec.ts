import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleQuotasComponent } from '@iam/role-quotas/role-quotas.component';

describe('RoleQuotasComponent', () => {
  let component: RoleQuotasComponent;
  let fixture: ComponentFixture<RoleQuotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoleQuotasComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleQuotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
