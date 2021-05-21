import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementResourceComponent } from './management-resource.component';

describe('ManagementResourceComponent', () => {
  let component: ManagementResourceComponent;
  let fixture: ComponentFixture<ManagementResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
