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
  options: string[];
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
  text = '';
  url = '';
  isLoaded = true;
  selectedQuestionType = '';

  constructor(
    private fb: FormBuilder,
    private crudService: DefaultCrudService
  ) {
    this.question = this.fb.group({
      user_id: new FormControl(1),
      subject_id: new FormControl(1),
      description: new FormControl('', [Validators.required]),
      options: new FormArray([]),
      answer: new FormControl('', [Validators.required]),
      level: new FormControl('', [Validators.required]),
      question_type_id: new FormControl(0, [Validators.required]),
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

  async save(type: QuestionType) {
    let question: any;
    if (type === this.TYPE.BOOLEAN) {
      const optionsArray = this.question.get('options') as FormArray;
      optionsArray.clear();

      optionsArray.push(this.fb.control('Sim'));
      optionsArray.push(this.fb.control('Não'));
      const answer = this.question.get('answer')?.value;
      question = {
        user_id: 1,
        subject_id: 1,
        description: this.question.value.description,
        options: JSON.stringify(this.question.value.options),
        answer: answer[0],
        level: this.question.value.level,
        question_type_id: type,
      };
    } else {
      question = {
        user_id: 1,
        subject_id: 1,
        description: this.question.value.description,
        options: JSON.stringify(this.question.value.options),
        answer: this.question.value.answer,
        level: this.question.value.level,
        question_type_id: type,
      };
    }
    this.question.get('question_type_id')?.setValue(type);

    await this.crudService
      .httpPost('questions/store', question)
      .then((response) => this.question.reset());
  }

  changeGenerationType(type: QuestionFrom): void {
    if (type !== this.selectedOption) {
      this.questions = [];
      this.selectedOption = type;
    }
  }

  saveGeneratedQuestion(): void {
    this.questions.forEach((question: Question) => {
      this.crudService.httpPost('questions/store', {
        user_id: 1,
        subject_id: 1,
        description: question.description,
        options: JSON.stringify(question.options),
        answer: question.answer,
        question_type_id: 2,
        level: 2,
      });
    });
  }

  generateQuestions(questionFrom: string): void {
    this.isLoaded = false;
    if (questionFrom === QuestionFrom.URL) {
      this.crudService
        .httpPostAutomatedQuestions('transcription/questions', {
          content: this.url,
          type: 'multiple_choice',
          num: 5,
        })
        .then((response) => {
          this.questions = response.questions.map((question: Question) => {
            return {
              user_id: 1,
              subject_id: 1,
              question_type_id: QuestionType.MCQ,
              description: question.description,
              options: question.options,
              answer: question.answer,
              level: Difficulty.EASY,
            } as QuestionInterface;
          });
        })
        .finally(() => (this.isLoaded = true));
    } else {
      this.crudService
        .httpPostAutomatedQuestions('text/questions', {
          content: this.text,
          type: 'multiple_choice',
          num: 4,
        })
        .then((response) => {
          this.questions = response.questions.map((question: Question) => {
            return {
              user_id: 1,
              subject_id: 1,
              question_type_id: QuestionType.MCQ,
              description: question.description,
              options: question.options,
              answer: question.answer,
              level: Difficulty.EASY,
            } as QuestionInterface;
          });
        })
        .finally(() => (this.isLoaded = true));
    }
  }
}
