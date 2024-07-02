import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendercomponentComponent } from './calendercomponent.component';

describe('CalendercomponentComponent', () => {
  let component: CalendercomponentComponent;
  let fixture: ComponentFixture<CalendercomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalendercomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendercomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
