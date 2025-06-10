import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SalaryIncrementComponent } from './salary-increment/salary-increment.component';
import { IncentiveAllocationComponent } from './incentive-allocation/incentive-allocation.component';
const routes: Routes = [
  {
    path: 'salary-increment',
    component: SalaryIncrementComponent,
  },
  {
    path: 'incentive-allocation',
    component: IncentiveAllocationComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompensationRoutingModule {}
