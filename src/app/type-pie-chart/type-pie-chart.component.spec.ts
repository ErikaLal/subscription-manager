import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypePieChartComponent } from './type-pie-chart.component';

describe('TypePieChartComponent', () => {
  let component: TypePieChartComponent;
  let fixture: ComponentFixture<TypePieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypePieChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypePieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
