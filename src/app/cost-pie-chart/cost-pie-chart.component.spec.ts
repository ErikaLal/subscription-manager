import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostPieChartComponent } from './cost-pie-chart.component';

describe('CostPieChartComponent', () => {
  let component: CostPieChartComponent;
  let fixture: ComponentFixture<CostPieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostPieChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
