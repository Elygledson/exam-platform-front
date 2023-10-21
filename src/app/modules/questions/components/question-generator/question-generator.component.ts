import { Component, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  FormControl,
} from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';

import { DefaultCrudService } from '../../../../shared/services/default-crud.service';
import {
  Difficulty,
  QuestionFrom,
  QuestionInterface,
  QuestionType,
} from '../../interfaces/question.interface';

interface Question {
  description: string;
  options: string;
  answer: string;
}

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
  QuestionFrom = QuestionFrom;
  url = '';
  text = '';
  isLoaded = true;

  constructor(
    private fb: FormBuilder,
    private crudService: DefaultCrudService
  ) {
    this.question = this.fb.group({
      description: new FormControl('', [Validators.required]),
      options: new FormArray([]),
      answer: new FormControl('', [Validators.required]),
      difficulty: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      score: new FormControl(1, [
        Validators.min(1),
        Validators.max(5),
        Validators.required,
      ]),
      type: new FormControl('', [Validators.required]),
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

  changeGenerationType(type: QuestionFrom): void {
    if (type !== this.selectedOption) {
      this.questions = [];
      this.selectedOption = type;
    }
  }

  saveGeneratedQuestion(): void {
    this.crudService.httpPost('questions', this.questions);
  }

  generateQuestions(questionFrom: QuestionFrom): void {
    this.isLoaded = false;
    if (questionFrom === QuestionFrom.URL) {
      this.questions = [
        {
          id: 1,
          description: 'question.description',
          options: ['e', 'e', 'e', 'e'],
          answer: 'question.answer',
          category: 'teste',
          difficulty: Difficulty.EASY,
          type: QuestionType.MCQ,
          score: 1,
        },
      ];
      this.crudService
        .httpPostAutomatedQuestions('transcription/questions', {
          content: this.url,
          type: 'multiple_choice',
          num: 5,
        })
        .then((response) => {
          this.questions = response.questions.map((question: Question) => {
            return {
              description: question.description,
              options: question.options.split('\n'),
              answer: question.answer,
              category: 'teste',
              difficulty: Difficulty.EASY,
              type: QuestionType.MCQ,
              score: 1,
            } as QuestionInterface;
          });
        })
        .finally(() => (this.isLoaded = true));
    } else {
      this.questions = [
        {
          id: 1,
          description: 'question.description',
          options: ['e', 'e', 'e', 'e'],
          answer: 'question.answer',
          category: 'teste',
          difficulty: Difficulty.EASY,
          type: QuestionType.MCQ,
          score: 1,
        },
      ];
      this.crudService
        .httpPostAutomatedQuestions('text/questions', {
          content: this.text,
          type: 'multiple_choice',
          num: 4,
        })
        .then((response) => {
          this.questions = response.questions.map((question: Question) => {
            return {
              description: question.description,
              options: question.options.split('\n'),
              answer: question.answer,
              category: 'teste',
              difficulty: Difficulty.EASY,
              type: QuestionType.MCQ,
              score: 1,
            } as QuestionInterface;
          });
        })
        .finally(() => (this.isLoaded = true));
    }
  }
}
