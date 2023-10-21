import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../../../../shared/confirmation-dialog/confirmation-dialog.component';
import { DefaultCrudService } from '../../../../shared/services/default-crud.service';
import { Router } from '@angular/router';
import { Exam } from '../../interfaces/exam.interface';
import {
  QuestionInterface,
  QuestionType,
} from 'src/app/modules/questions/interfaces/question.interface';

@Component({
  selector: 'app-exam',
  templateUrl: './exam-generator.component.html',
  styleUrls: ['./exam-generator.component.css'],
})
export class ExamGeneratorComponent {
  public selectedQuestions: QuestionInterface[] = [];
  public exam!: Exam;
  public selectedStepper = 0;
  public selectedCourse = '';
  public examName = '';
  public TYPE = QuestionType;
  inReorderMode = false;

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
    private router: Router,
    private crudService: DefaultCrudService
  ) {}

  ngOnInit() {
    this.crudService.httpGet('questions').then((response) => {
      this.questions = response.questions;
    });
  }

  openConfirmationDialog(): void {
    const exam: Exam = {
      name: this.examName,
      questions: this.selectedQuestions,
    };
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: { message: 'Tem certeza de que deseja criar a prova?' },
    });

    dialogRef.afterClosed().subscribe((response) => {
      if (response)
        this.crudService.httpPost('exams', exam).then((response) => {
          this.exam = response.exam;
          this.shareExam();
        });
    });
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

  shareExam(): void {
    if (this.exam) this.router.navigate(['exam', this.exam.id]);
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

  toggleEditMode(): void {}
}
