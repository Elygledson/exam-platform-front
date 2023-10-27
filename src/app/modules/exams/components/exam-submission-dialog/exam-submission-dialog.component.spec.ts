import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamSubmissionDialogComponent } from './exam-submission-dialog.component';

describe('ExamSubmissionDialogComponent', () => {
  let component: ExamSubmissionDialogComponent;
  let fixture: ComponentFixture<ExamSubmissionDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExamSubmissionDialogComponent]
    });
    fixture = TestBed.createComponent(ExamSubmissionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
