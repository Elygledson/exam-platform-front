import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';

import { DefaultCrudService } from '../shared/services/default-crud.service';
import {
  QuestionInterface,
  QuestionType,
} from '../shared/interfaces/question.interface';

@Component({
  selector: 'app-question',
  templateUrl: './question-generator.component.html',
  styleUrls: ['./question-generator.component.css'],
})
export class QuestionGeneratorComponent {
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  question: FormGroup;
  selectedOption = '';
  questions: QuestionInterface[] = [];
  TYPE = QuestionType;
  isLoaded = false;

  constructor(
    private fb: FormBuilder,
    private crudService: DefaultCrudService
  ) {
    this.question = this.fb.group({
      description: ['', Validators.required],
      options: new FormArray([]),
      answer: ['', Validators.required],
      difficulty: ['', Validators.required],
      category: ['', Validators.required],
      score: [1, [Validators.min(1), Validators.max(5), Validators.required]],
      type: ['', Validators.required],
    });
  }

  get optionControls() {
    return (this.question.get('options') as FormArray).controls;
  }

  addOption() {
    const optionsArray = this.question.get('options') as FormArray;
    optionsArray.push(this.fb.control(''));
  }

  removeOption(index: number) {
    const optionsArray = this.question.get('options') as FormArray;
    optionsArray.removeAt(index);
  }

  save(type: QuestionType): void {
    if (type === this.TYPE.BOOLEAN) {
      const optionsArray = this.question.get('options') as FormArray;
      optionsArray.clear();

      optionsArray.push(this.fb.control('Sim'));
      optionsArray.push(this.fb.control('Não'));
    }
    this.question.get('type')?.setValue(type);
    this.crudService
      .httpPost('questions', this.question.value)
      .then((response) => this.question.reset());
  }

  generateQuestions(): void {}
}
