import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementDataComponent } from './management-data.component';

describe('ManagementDataComponent', () => {
  let component: ManagementDataComponent;
  let fixture: ComponentFixture<ManagementDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
