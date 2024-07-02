import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddexpensecomponentComponent } from './addexpensecomponent.component';

describe('AddexpensecomponentComponent', () => {
  let component: AddexpensecomponentComponent;
  let fixture: ComponentFixture<AddexpensecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddexpensecomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddexpensecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
