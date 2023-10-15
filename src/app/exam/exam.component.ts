import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../shared/confirmation-dialog/confirmation-dialog.component';
import { QuestionInterface } from '../shared/interfaces/question.interface';
import { DefaultCrudService } from '../shared/services/default-crud.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css'],
})
export class ExamComponent {
  @Input() id!: number;
  public submitted = false;
  public userName = '';
  questions: QuestionInterface[] = [];

  constructor(
    public dialog: MatDialog,
    private crudService: DefaultCrudService
  ) {}

  ngOnInit() {
    if (this.id)
      this.crudService.httpGet(`exams/${this.id}`).then((response) => {
        this.questions = response.exam.questions;
        console.log(this.questions);
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

  submit(): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: { message: 'Tem certeza de que deseja finalizar a prova?' },
    });

    dialogRef.afterClosed().subscribe((response) => {
      if (response) this.submitted = response;
    });
  }
}
