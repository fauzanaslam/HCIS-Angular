import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DummyDataService {

  constructor() { }

  getSalaryIncrementDashboardData() {
    return [
      {dinas: 'DT', total: 12000000, spend: 7000000},
      {dinas: 'DB', total: 13000000, spend: 8000000},
      {dinas: 'DC', total: 14000000, spend: 9000000},
      {dinas: 'DF', total: 15000000, spend: 6000000},
      {dinas: 'DL', total: 16000000, spend: 5000000},
    ]
  }
}
