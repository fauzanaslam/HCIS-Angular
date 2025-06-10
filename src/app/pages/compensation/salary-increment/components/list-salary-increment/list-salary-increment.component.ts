import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-list-salary-increment',
  templateUrl: './list-salary-increment.component.html',
  styleUrl: './list-salary-increment.component.css'
})
export class ListSalaryIncrementComponent implements OnInit {
  public async ngOnInit(){
    initFlowbite()
  }

}
