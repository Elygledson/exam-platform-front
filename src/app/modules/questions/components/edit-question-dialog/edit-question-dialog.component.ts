import { Component, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DefaultCrudService } from '../../../../shared/services/default-crud.service';
import {
  QuestionInterface,
  QuestionType,
} from '../../interfaces/question.interface';

@Component({
  selector: 'app-edit-question-dialog',
  templateUrl: './edit-question-dialog.component.html',
  styleUrls: ['./edit-question-dialog.component.css'],
})
export class EditQuestionDialogComponent {
  public question: FormGroup;

  public QuestionType = QuestionType;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: QuestionInterface,
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
    this.crudService
      .httpPatch(
        `questions/${this.question.get('id')?.value}`,
        this.question.value
      )
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
