import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { SnackbarService } from '../shared/services/snackbar.service';
import { HttpClient } from '@angular/common/http';
import {
  Difficulty,
  Question,
  QuestionType,
} from '../exam-generator/exam-generator.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-question',
  templateUrl: './question-generator.component.html',
  styleUrls: ['./question-generator.component.css'],
})
export class QuestionGeneratorComponent {
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  @Input()
  requiredFileType!: string;

  fileName = '';
  uploadProgress!: number;
  uploadSub!: Subscription;
  question: FormGroup;
  selectedOption = '';
  questions: Question[] = [];
  isLoaded = false;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private snackbar: SnackbarService
  ) {
    this.question = this.fb.group({
      text: [''],
      options: this.fb.array([]),
      correctAnswer: [''],
      difficulty: [''],
      category: [''],
      score: [''],
    });
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.fileName = file.name;

      const formData = new FormData();

      formData.append('thumbnail', file);
      console.log(formData);

      const upload$ = this.http.post('/api/thumbnail-upload', formData);

      upload$.subscribe();
    }
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

  generateQuestions(): void {
    this.isLoaded = true;
    setTimeout(() => {
      this.isLoaded = false;
      this.questions = [
        {
          id: 1,
          text: 'Qual é o termo usado para se referir a um espaço de armazenamento de dados em um computador?',
          options: ['Bit', 'Byte', 'Disco Rígido', 'Memória RAM'],
          correctAnswer: 'Byte',
          difficulty: Difficulty.EASY,
          category: 'Ciência da Computação',
          score: 3,
          author: {
            id: 1,
            name: 'Prof. John Doe',
          },
          type: QuestionType.mcq,
        },
        {
          id: 2,
          text: 'Qual das seguintes linguagens de programação é uma linguagem de alto nível?',
          options: ['Assembly', 'C', 'Java', 'Binary'],
          correctAnswer: 'Java',
          difficulty: Difficulty.EASY,
          category: 'Ciência da Computação',
          score: 1,
          author: {
            id: 1,
            name: 'Prof. John Doe',
          },
          type: QuestionType.mcq,
        },
        {
          id: 3,
          text: 'dasjdkajdklajskdjklas?',
          options: ['Assembly', 'C', 'Java', 'Binary'],
          correctAnswer: 'Java',
          difficulty: Difficulty.MEDIUM,
          category: 'Ciência da Computação',
          score: 3,
          author: {
            id: 1,
            name: 'Prof. John Doe',
          },
          type: QuestionType.mcq,
        },
        {
          id: 4,
          text: 'fdsfsdfs?',
          options: [],
          correctAnswer: 'Sim',
          difficulty: Difficulty.HARD,
          category: 'Ciência da Computação',
          score: 5,
          author: {
            id: 1,
            name: 'Prof. John Doe',
          },
          type: QuestionType.boolean,
        },
      ];
    }, 300);
  }
}
