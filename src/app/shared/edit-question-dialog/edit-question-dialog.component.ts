import { Component, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import {
  Question,
  QuestionType,
} from 'src/app/exam-generator/exam-generator.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DefaultCrudService } from '../services/default-crud.service';

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
    private crudService: DefaultCrudService,
    public dialogRef: MatDialogRef<EditQuestionDialogComponent>,
    private fb: FormBuilder
  ) {
    this.question = this.fb.group({
      id: [this.data.id],
      description: [this.data.description],
      options: this.fb.array(this.data.options || []),
      answer: [this.data.answer],
      difficulty: [this.data.difficulty],
      category: [this.data.category],
      score: [this.data.score],
    });
  }

  get optionControls() {
    return (this.question.get('options') as FormArray).controls;
  }

  save(): void {
    console.log(this.question.value);
    this.crudService
      .httpPatch('questions/', this.question.value)
      .then((response) => this.dialogRef.close());
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
