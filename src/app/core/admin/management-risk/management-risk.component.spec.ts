import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementRiskComponent } from './management-risk.component';

describe('ManagementRiskComponent', () => {
  let component: ManagementRiskComponent;
  let fixture: ComponentFixture<ManagementRiskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementRiskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementRiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
