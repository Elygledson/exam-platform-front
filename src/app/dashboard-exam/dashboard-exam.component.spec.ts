import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardExamComponent } from './dashboard-exam.component';

describe('DashboardExamComponent', () => {
  let component: DashboardExamComponent;
  let fixture: ComponentFixture<DashboardExamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardExamComponent]
    });
    fixture = TestBed.createComponent(DashboardExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
