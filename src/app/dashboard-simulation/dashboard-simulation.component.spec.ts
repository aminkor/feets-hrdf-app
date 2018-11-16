import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSimulationComponent } from './dashboard-simulation.component';

describe('DashboardSimulationComponent', () => {
  let component: DashboardSimulationComponent;
  let fixture: ComponentFixture<DashboardSimulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSimulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSimulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
