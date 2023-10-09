import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../shared/confirmation-dialog/confirmation-dialog.component';
import { QuestionInterface } from '../shared/interfaces/question.interface';
import { DefaultCrudService } from '../shared/services/default-crud.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam-generator.component.html',
  styleUrls: ['./exam-generator.component.css'],
})
export class ExamGeneratorComponent {
  public selectedQuestions: QuestionInterface[] = [];
  public selectedStepper = 0;
  public selectedCourse = '';
  courses = [
    'Introdução à Programação',
    'Algoritmos e Estruturas de Dados',
    'Banco de Dados e Sistemas de Gerenciamento',
    'Redes de Computadores',
    'Engenharia de Software',
    'Inteligência Artificial',
    'Segurança da Informação',
    'Desenvolvimento Web',
    'Sistemas Operacionais',
    'Computação Gráfica',
  ];

  questions: QuestionInterface[] = [];

  constructor(
    public dialog: MatDialog,
    private crudService: DefaultCrudService
  ) {}

  ngOnInit() {
    this.crudService.httpGet('questions').then((response) => {
      this.questions = response.questions;
    });
  }

  openConfirmationDialog(): void {
    console.log(this.selectQuestion);
    const dialogRef = this.dialog.open(ConfirmationDialogComponent);
  }

  stepperSelectionChange(event: any): void {
    if (event.selectedStep) this.selectedStepper = event.selectedIndex;
  }

  selectQuestion(newQuestion: QuestionInterface) {
    const index = this.selectedQuestions.findIndex(
      (question) => question.id === newQuestion.id
    );
    if (index == -1) {
      this.selectedQuestions.push(newQuestion);
    } else {
      this.selectedQuestions.splice(index, 1);
    }
  }

  onCourseChange(): void {}

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

  exportAssessment(): void {}

  toggleEditMode(): void {}
}
