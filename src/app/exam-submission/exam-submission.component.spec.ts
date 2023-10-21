import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamSubmissionComponent } from './exam-submission.component';

describe('ExamSubmissionComponent', () => {
  let component: ExamSubmissionComponent;
  let fixture: ComponentFixture<ExamSubmissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExamSubmissionComponent]
    });
    fixture = TestBed.createComponent(ExamSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
