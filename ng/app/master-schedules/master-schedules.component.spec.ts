import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterSchedulesComponent } from './master-schedules.component';

describe('MasterSchedulesComponent', () => {
  let component: MasterSchedulesComponent;
  let fixture: ComponentFixture<MasterSchedulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterSchedulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
