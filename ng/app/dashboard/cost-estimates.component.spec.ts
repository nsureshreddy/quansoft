import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostEstimatesComponent } from './cost-estimates.component';

describe('CostEstimatesComponent', () => {
  let component: CostEstimatesComponent;
  let fixture: ComponentFixture<CostEstimatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostEstimatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostEstimatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
