import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesummarycomponentComponent } from './expensesummarycomponent.component';

describe('ExpensesummarycomponentComponent', () => {
  let component: ExpensesummarycomponentComponent;
  let fixture: ComponentFixture<ExpensesummarycomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpensesummarycomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpensesummarycomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
