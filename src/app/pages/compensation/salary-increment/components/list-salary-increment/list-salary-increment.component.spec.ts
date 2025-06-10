import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSalaryIncrementComponent } from './list-salary-increment.component';

describe('ListSalaryIncrementComponent', () => {
  let component: ListSalaryIncrementComponent;
  let fixture: ComponentFixture<ListSalaryIncrementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListSalaryIncrementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListSalaryIncrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
