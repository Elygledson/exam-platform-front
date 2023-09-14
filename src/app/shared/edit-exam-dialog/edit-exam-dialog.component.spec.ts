import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExamDialogComponent } from './edit-exam-dialog.component';

describe('EditExamDialogComponent', () => {
  let component: EditExamDialogComponent;
  let fixture: ComponentFixture<EditExamDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditExamDialogComponent]
    });
    fixture = TestBed.createComponent(EditExamDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
