import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTestPlanComponent } from './show-test-plan.component';

describe('ShowTestPlanComponent', () => {
  let component: ShowTestPlanComponent;
  let fixture: ComponentFixture<ShowTestPlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowTestPlanComponent]
    });
    fixture = TestBed.createComponent(ShowTestPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
