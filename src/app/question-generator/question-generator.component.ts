import { Component, Input, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  Validators,
} from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import {
  Difficulty,
  Question,
  QuestionType,
} from '../exam-generator/exam-generator.component';
import { Subscription } from 'rxjs';
import { DefaultCrudService } from '../shared/services/default-crud.service';

@Component({
  selector: 'app-question',
  templateUrl: './question-generator.component.html',
  styleUrls: ['./question-generator.component.css'],
})
export class QuestionGeneratorComponent {
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  question: FormGroup;
  selectedOption = '';
  questions: Question[] = [];
  isLoaded = false;

  constructor(
    private fb: FormBuilder,
    private crudService: DefaultCrudService
  ) {
    this.question = this.fb.group({
      description: ['', Validators.required],
      options: this.fb.array([]),
      answer: ['', Validators.required],
      difficulty: ['', Validators.required],
      category: ['', Validators.required],
      score: [0, Validators.required],
    });
  }

  get optionControls() {
    return (this.question.get('options') as FormArray).controls;
  }

  save(): void {
    console.log(this.question.value);
    this.crudService
      .httpPost('questions', this.question.value)
      .then((response) => this.question.reset());
  }

  addOption() {
    const optionsArray = this.question.get('options') as FormArray;
    optionsArray.push(this.fb.control(''));
  }

  removeOption(index: number) {
    const optionsArray = this.question.get('options') as FormArray;
    optionsArray.removeAt(index);
  }

  generateQuestions(): void {
    this.isLoaded = true;
    setTimeout(() => {
      this.isLoaded = false;
      this.questions = [
        {
          id: 1,
          description:
            'Qual é o termo usado para se referir a um espaço de armazenamento de dados em um computador?',
          options: ['Bit', 'Byte', 'Disco Rígido', 'Memória RAM'],
          answer: 'Byte',
          difficulty: Difficulty.EASY,
          category: 'Ciência da Computação',
          score: 3,
          type: QuestionType.mcq,
        },
        {
          id: 2,
          description:
            'Qual das seguintes linguagens de programação é uma linguagem de alto nível?',
          options: ['Assembly', 'C', 'Java', 'Binary'],
          answer: 'Java',
          difficulty: Difficulty.EASY,
          category: 'Ciência da Computação',
          score: 1,
          type: QuestionType.mcq,
        },
        {
          id: 3,
          description: 'dasjdkajdklajskdjklas?',
          options: ['Assembly', 'C', 'Java', 'Binary'],
          answer: 'Java',
          difficulty: Difficulty.MEDIUM,
          category: 'Ciência da Computação',
          score: 3,
          type: QuestionType.mcq,
        },
        {
          id: 4,
          description: 'fdsfsdfs?',
          options: [],
          answer: 'Sim',
          difficulty: Difficulty.HARD,
          category: 'Ciência da Computação',
          score: 5,
          type: QuestionType.boolean,
        },
      ];
    }, 300);
  }
}
