import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutChartDashboardComponent } from './donut-chart-dashboard.component';

describe('DonutChartDashboardComponent', () => {
  let component: DonutChartDashboardComponent;
  let fixture: ComponentFixture<DonutChartDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DonutChartDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DonutChartDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
