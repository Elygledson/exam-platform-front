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
import {
  Difficulty,
  QuestionInterface,
  QuestionType,
} from '../questions/interfaces/question.interface';

export interface UsersAnswers {
  description: string;
  options: string[];
  answer: string;
  answerIndex: number;
  userOption: { choosen: number; isCorrect: boolean };
  category: string;
  difficulty: Difficulty;
  score: number;
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
      studentRegistrationCode: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
    if (this.id)
      this.crudService.httpGet(`exams/${this.id}`).then((response: any) => {
        this.questions = response.exam.questions.map(
          (question: QuestionInterface) => {
            return {
              description: question.description,
              options: question.options,
              answer: question.answer,
              answerIndex: question.options.indexOf(question.answer),
              category: question.category,
              difficulty: question.difficulty,
              score: question.score,
              type: question.type,
              userOption: {
                choosen: -1,
                isCorrect: false,
              },
            } as UsersAnswers;
          }
        );
      });
  }

  getDifficultyColor(difficulty: string) {
    switch (difficulty) {
      case 'Fácil':
        return 'easy-button';
      case 'Médio':
        return 'medium-button';
      case 'Difícil':
        return 'hard-button';
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

  submit(): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: { message: 'Tem certeza de que deseja finalizar a prova?' },
    });

    dialogRef.afterClosed().subscribe((response) => {
      if (response) {
        this.submitted = response;
        this.questions.forEach((question: UsersAnswers) => {
          if (question.userOption.isCorrect == true) {
            this.corrects += 1;
          }
        });
      }
    });
  }
}
