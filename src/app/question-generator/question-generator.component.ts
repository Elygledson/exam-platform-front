import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { SnackbarService } from '../shared/services/snackbar.service';

@Component({
  selector: 'app-question',
  templateUrl: './question-generator.component.html',
  styleUrls: ['./question-generator.component.css'],
})
export class QuestionGeneratorComponent {
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  question: FormGroup;

  constructor(private fb: FormBuilder, private snackbar: SnackbarService) {
    this.question = this.fb.group({
      text: [''],
      options: this.fb.array([]),
      correctAnswer: [''],
      difficulty: [''],
      category: [''],
      score: [''],
    });
  }

  get optionControls() {
    return (this.question.get('options') as FormArray).controls;
  }

  save(): void {
    this.snackbar.showMessage('Questão salva com sucesso!', true);
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
