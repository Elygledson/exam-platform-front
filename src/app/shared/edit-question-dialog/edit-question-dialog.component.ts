import { Component, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import {
  Question,
  QuestionType,
} from 'src/app/exam-generator/exam-generator.component';
import { SnackbarService } from '../services/snackbar.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-question-dialog',
  templateUrl: './edit-question-dialog.component.html',
  styleUrls: ['./edit-question-dialog.component.css'],
})
export class EditQuestionDialogComponent {
  public question: FormGroup;

  public QuestionType = QuestionType;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Question,
    public dialogRef: MatDialogRef<EditQuestionDialogComponent>,
    private fb: FormBuilder,
    private snackbar: SnackbarService
  ) {
    this.question = this.fb.group({
      text: [this.data.description],
      options: this.fb.array(this.data.options || []),
      answer: [this.data.answer],
      level: [this.data.level],
    });
  }

  get optionControls() {
    return (this.question.get('options') as FormArray).controls;
  }

  save(): void {
    console.log(this.question.value);
    this.snackbar.showMessage('Questão salva com sucesso!', true);
    this.dialogRef.close();
  }

  addOption() {
    const optionsArray = this.question.get('options') as FormArray;
    optionsArray.push(this.fb.control(''));
  }

  removeOption(index: number) {
    const optionsArray = this.question.get('options') as FormArray;
    optionsArray.removeAt(index);
  }
}
