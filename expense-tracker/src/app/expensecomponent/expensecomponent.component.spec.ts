import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensecomponentComponent } from './expensecomponent.component';

describe('ExpensecomponentComponent', () => {
  let component: ExpensecomponentComponent;
  let fixture: ComponentFixture<ExpensecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpensecomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpensecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
