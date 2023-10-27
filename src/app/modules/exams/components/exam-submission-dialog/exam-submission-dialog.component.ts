import { Component, Inject } from '@angular/core';
import { ExamSubmissionInterface } from '../../interfaces/exam-submission.interface';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { QuestionInterface } from 'src/app/modules/questions/interfaces/question.interface';
import { DefaultCrudService } from 'src/app/shared/services/default-crud.service';
import { UsersAnswers } from '../../exam.component';

@Component({
  selector: 'app-exam-submission-dialog',
  templateUrl: './exam-submission-dialog.component.html',
  styleUrls: ['./exam-submission-dialog.component.css'],
})
export class ExamSubmissionDialogComponent {
  public questions: UsersAnswers[] = [];

  constructor(
    public dialogRef: MatDialogRef<ExamSubmissionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ExamSubmissionInterface,
    public crudService: DefaultCrudService
  ) {}

  async ngOnInit() {
    await this.crudService
      .httpPost('exams/show', { user_id: 1, exam_id: this.data.exam_id })
      .then((response: any) => {
        this.questions = response.questions.map(
          (question: any, index: number) => {
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
                choosen: options.indexOf(this.data.answers[index].answer),
                isCorrect: this.data.answers[index].answer == question.answer,
              },
            } as UsersAnswers;
          }
        );
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
}
