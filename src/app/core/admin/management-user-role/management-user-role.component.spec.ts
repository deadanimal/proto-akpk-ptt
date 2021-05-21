import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementUserRoleComponent } from './management-user-role.component';

describe('ManagementUserRoleComponent', () => {
  let component: ManagementUserRoleComponent;
  let fixture: ComponentFixture<ManagementUserRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementUserRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementUserRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
