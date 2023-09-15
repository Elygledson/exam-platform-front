import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Question } from '../exam/exam.component';
import { MatAccordion } from '@angular/material/expansion';
import { SnackbarService } from '../shared/services/snackbar.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent {
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  public multipleChoiceQuestion?: Question;
  multipleChoiceForm: FormGroup;

  constructor(private fb: FormBuilder, private snackbar: SnackbarService) {
    this.multipleChoiceForm = this.fb.group({
      text: [''],
      options: this.fb.array([]),
      correctAnswer: [''],
      difficulty: [''],
      category: [''],
      score: [''],
    });
  }

  get optionControls() {
    return (this.multipleChoiceForm.get('options') as FormArray).controls;
  }

  save(): void {
    this.snackbar.showMessage('Questão salva com sucesso!', true);
  }

  addOption() {
    const optionsArray = this.multipleChoiceForm.get('options') as FormArray;
    optionsArray.push(this.fb.control(''));
  }

  removeOption(index: number) {
    const optionsArray = this.multipleChoiceForm.get('options') as FormArray;
    optionsArray.removeAt(index);
  }
}
