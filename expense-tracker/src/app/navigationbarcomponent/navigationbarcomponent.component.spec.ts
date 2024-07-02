import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationbarcomponentComponent } from './navigationbarcomponent.component';

describe('NavigationbarcomponentComponent', () => {
  let component: NavigationbarcomponentComponent;
  let fixture: ComponentFixture<NavigationbarcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationbarcomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationbarcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
