import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../../../../shared/confirmation-dialog/confirmation-dialog.component';
import { DefaultCrudService } from '../../../../shared/services/default-crud.service';
import { Router } from '@angular/router';
import { Exam } from '../../interfaces/exam.interface';
import {
  Difficulty,
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
  public exam: Exam[] = [];
  public selectedStepper = 0;
  public selectedCourse = '';
  public examName = '';
  public TYPE = QuestionType;

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
    this.crudService.httpPost('questions', { user_id: 1 }).then((response) => {
      this.questions = response.map((question: any) => {
        return {
          id: question.id,
          user_id: 1,
          subject_id: 1,
          description: question.description,
          options: JSON.parse(question.options),
          answer: question.answer,
          level: question.level,
          question_type_id: question.question_type_id,
        };
      });
    });
  }

  openConfirmationDialog(): void {
    const exam: Exam = {
      user_id: 1,
      subject_id: 1,
      name: this.examName,
      questions: this.selectedQuestions,
    };
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: { message: 'Tem certeza de que deseja criar a prova?' },
    });

    dialogRef.afterClosed().subscribe((response) => {
      if (response)
        this.crudService.httpPost('exams', exam).then((response) => {
          console.log(response);
          this.exam = response;
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
    if (this.exam.length > 0)
      this.router.navigate(['exam', this.exam[0]['id']]);
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

  getLevelName(difficulty: Difficulty) {
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

  toggleEditMode(): void {}
}
