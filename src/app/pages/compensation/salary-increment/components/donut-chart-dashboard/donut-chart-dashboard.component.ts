import { Component, AfterViewInit, OnInit } from '@angular/core';
import { DummyDataService } from '../../../../../core/services/dummy-data.service';
import ApexCharts from 'apexcharts';
import { SalaryIncrementDashboardDTO } from '../../dto/dashboard.dto';

@Component({
  selector: 'app-donut-chart-dashboard',
  templateUrl: './donut-chart-dashboard.component.html',
  styleUrls: ['./donut-chart-dashboard.component.css'],
})
export class DonutChartDashboardComponent implements OnInit, AfterViewInit {
  data: SalaryIncrementDashboardDTO[] = [];

  constructor(private dummyDataService: DummyDataService) {}

  ngOnInit() {
    this.fetchData();
  }

  ngAfterViewInit() {
    this.renderCharts();
  }

  private fetchData() {
    this.data = this.dummyDataService.getSalaryIncrementDashboardData();
  }

  private getChartOptions(item: SalaryIncrementDashboardDTO) {
    const percentage = (item.spend / item.total) * 100;

    return {
      series: [percentage, 100 - percentage],
      labels: ['Spend', 'Remaining'],
      colors: ['#28C76F', '#d4f4e2'],
      chart: {
        type: 'donut',
        height: 200,
        width: 200,
      },
      stroke: {
        colors: ['transparent'],
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          donut: {
            size: '70%',
            labels: {
              show: true,
              name: {
                show: true,
                fontFamily: 'Inter, sans-serif',
              },
              value: {
                formatter: (value: number) => `${value.toFixed(2)}%`,
              },
              total: {
                showAlways: true,
                label: '',
                show: true,
                formatter: () => `${percentage.toFixed(2)}%`,
              },
            },
          },
        },
      },
      legend: { show: false },
      tooltip: {
        enabled: false,
      },
    };
  }

  private renderCharts() {
    this.data.forEach((item: SalaryIncrementDashboardDTO): void => {
      const element = document.getElementById(`donut-chart-${item.dinas}`);
      if (element) {
        const chart = new ApexCharts(element, this.getChartOptions(item));
        chart.render();
      }
    });
  }
}
