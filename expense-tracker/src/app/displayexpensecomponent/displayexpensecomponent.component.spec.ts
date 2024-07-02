import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayexpensecomponentComponent } from './displayexpensecomponent.component';

describe('DisplayexpensecomponentComponent', () => {
  let component: DisplayexpensecomponentComponent;
  let fixture: ComponentFixture<DisplayexpensecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayexpensecomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayexpensecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
