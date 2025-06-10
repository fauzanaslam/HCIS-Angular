import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncentiveAllocationComponent } from './incentive-allocation.component';

describe('IncentiveAllocationComponent', () => {
  let component: IncentiveAllocationComponent;
  let fixture: ComponentFixture<IncentiveAllocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IncentiveAllocationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncentiveAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
