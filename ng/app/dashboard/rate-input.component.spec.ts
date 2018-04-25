import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateInputComponent } from './rate-input.component';

describe('RateInputComponent', () => {
  let component: RateInputComponent;
  let fixture: ComponentFixture<RateInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
