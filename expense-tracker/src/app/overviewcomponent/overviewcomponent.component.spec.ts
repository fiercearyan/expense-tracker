import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewcomponentComponent } from './overviewcomponent.component';

describe('OverviewcomponentComponent', () => {
  let component: OverviewcomponentComponent;
  let fixture: ComponentFixture<OverviewcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OverviewcomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
