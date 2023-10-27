import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DefaultCrudService } from 'src/app/shared/services/default-crud.service';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { QuestionType } from '../questions/interfaces/question.interface';

export interface UsersAnswers {
  id: number;
  description: string;
  options: string[];
  answer: string;
  answerIndex: number;
  userOption: { choosen: number; isCorrect: boolean };
  category?: string;
  level: number;
  type?: QuestionType;
}

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css'],
})
export class ExamComponent {
  @Input() id!: number;
  form: FormGroup;
  public submitted = false;
  public userName = '';
  public answer = '';
  questions: UsersAnswers[] = [];
  public corrects = 0;
  type = QuestionType;

  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
    private crudService: DefaultCrudService
  ) {
    this.form = this.fb.group({
      name: new FormControl('', [Validators.required]),
      register: new FormControl('', [Validators.required]),
    });
  }

  async ngOnInit() {
    if (this.id)
      await this.crudService
        .httpPost('exams/show', { user_id: 1, exam_id: this.id })
        .then((response: any) => {
          this.questions = response.questions.map((question: any) => {
            const options = JSON.parse(question.options);
            return {
              id: question.id,
              description: question.description,
              options: options,
              answer: question.answer,
              answerIndex: options.indexOf(question.answer),
              level: question.level,
              type: question.question_type_id,
              userOption: {
                choosen: -1,
                isCorrect: false,
              },
            } as UsersAnswers;
          });
        });
  }

  getDifficultyColor(difficulty: number) {
    switch (difficulty) {
      case 1:
        return 'easy-button';
      case 2:
        return 'medium-button';
      case 3:
        return 'hard-button';
      default:
        return '';
    }
  }

  getLevelName(difficulty: number) {
    switch (difficulty) {
      case 1:
        return 'Fácil';
      case 2:
        return 'Médio';
      case 3:
        return 'Difícil';
      default:
        return '';
    }
  }

  onAnswerSelected(
    questionIndex: number,
    optionIndex: number,
    selectedAnswer: string
  ): void {
    this.questions[questionIndex].userOption = {
      choosen: optionIndex,
      isCorrect: this.questions[questionIndex].answer === selectedAnswer,
    };
  }

  async submit() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: { message: 'Tem certeza de que deseja finalizar a prova?' },
    });

    dialogRef.afterClosed().subscribe(async (response) => {
      let submission!: any;
      if (response) {
        this.submitted = response;
        this.questions.forEach((question: UsersAnswers) => {
          if (question.userOption.isCorrect == true) {
            this.corrects += 1;
          }
        });
      }
      submission = {
        exam_id: this.id,
        register: this.form.get('register')?.value,
        name: this.form.get('name')?.value,
        score: this.corrects,
        questions: this.questions.map((question) => {
          return {
            id: question.id,
            answer: question.answer,
            assert: question.userOption.isCorrect,
          };
        }),
      };
      await this.crudService.httpPost('submissions/store', {
        ...submission,
      });
    });
  }
}
