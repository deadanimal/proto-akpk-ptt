import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulingTaskComponent } from './scheduling-task.component';

describe('SchedulingTaskComponent', () => {
  let component: SchedulingTaskComponent;
  let fixture: ComponentFixture<SchedulingTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulingTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulingTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
