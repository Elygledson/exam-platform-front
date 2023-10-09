import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../shared/confirmation-dialog/confirmation-dialog.component';
import { QuestionInterface } from '../shared/interfaces/question.interface';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css'],
})
export class ExamComponent {
  public submitted = false;
  questions: QuestionInterface[] = [];

  constructor(public dialog: MatDialog) {}

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

  submit(): void {
    this.dialog.open(ConfirmationDialogComponent);
    this.submitted = true;
  }
}
