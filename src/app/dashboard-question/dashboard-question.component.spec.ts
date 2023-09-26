import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardQuestionComponent } from './dashboard-question.component';

describe('DashboardQuestionComponent', () => {
  let component: DashboardQuestionComponent;
  let fixture: ComponentFixture<DashboardQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardQuestionComponent]
    });
    fixture = TestBed.createComponent(DashboardQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
