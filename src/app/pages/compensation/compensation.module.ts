import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompensationRoutingModule } from './compensation-routing.module';
import { SalaryIncrementComponent } from './salary-increment/salary-increment.component';
import { IncentiveAllocationComponent } from './incentive-allocation/incentive-allocation.component';
import { DonutChartDashboardComponent } from './salary-increment/components/donut-chart-dashboard/donut-chart-dashboard.component';
import { IconsModule } from '../../shared/icons/icons.module';
import { AdminViewComponent } from './salary-increment/admin-view/admin-view.component';
import { ListSalaryIncrementComponent } from './salary-increment/components/list-salary-increment/list-salary-increment.component';

@NgModule({
  declarations: [
    SalaryIncrementComponent,
    IncentiveAllocationComponent,
    DonutChartDashboardComponent,
    AdminViewComponent,
    ListSalaryIncrementComponent,
  ],
  imports: [CommonModule, CompensationRoutingModule, IconsModule],
})
export class CompensationModule {}
