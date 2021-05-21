import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementDocCtrlComponent } from './management-doc-ctrl.component';

describe('ManagementDocCtrlComponent', () => {
  let component: ManagementDocCtrlComponent;
  let fixture: ComponentFixture<ManagementDocCtrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementDocCtrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementDocCtrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
