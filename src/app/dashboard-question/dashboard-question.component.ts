import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
  Difficulty,
  Question,
  QuestionType,
} from '../exam-generator/exam-generator.component';
import { SnackbarService } from '../shared/services/snackbar.service';
import { EditQuestionDialogComponent } from '../shared/edit-question-dialog/edit-question-dialog.component';

@Component({
  selector: 'app-dashboard-question',
  templateUrl: './dashboard-question.component.html',
  styleUrls: ['./dashboard-question.component.css'],
})
export class DashboardQuestionComponent {
  filter: string = '';
  filterQuestions: Question[] = [];
  questions: Question[] = [
    {
      id: 1,
      description:
        'Qual é o termo usado para se referir a um espaço de armazenamento de dados em um computador?',
      options: ['Bit', 'Byte', 'Disco Rígido', 'Memória RAM'],
      answer: 'Byte',
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
      description:
        'Qual das seguintes linguagens de programação é uma linguagem de alto nível?',
      options: ['Assembly', 'C', 'Java', 'Binary'],
      answer: 'Java',
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
      description:
        'Qual das seguintes linguagens de programação é uma linguagem de alto nível?',
      options: ['Assembly', 'C', 'Java', 'Binary'],
      answer: 'Java',
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
      description:
        'Qual das seguintes linguagens de programação é uma linguagem de alto nível?',
      options: [],
      answer: 'Sim',
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

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private snackBar: SnackbarService
  ) {}

  ngOnInit() {
    this.filterQuestions = this.questions;
  }

  navigateToQuestions(): void {
    this.router.navigate(['admin', 'create-question']);
  }

  getStarArray(numStars: number): any[] {
    return Array(numStars).fill(0);
  }

  applyFilter(): void {
    this.filterQuestions = this.questions.filter(
      (question) =>
        question.category.toLowerCase().includes(this.filter.toLowerCase()) ||
        question.author.name
          .toLocaleLowerCase()
          .includes(this.filter.toLowerCase())
    );
  }

  editQuestion(index: number): void {
    this.dialog.open(EditQuestionDialogComponent, {
      width: '700px',
      data: this.questions[index],
    });
  }

  removeQuestion(index: number): void {
    this.filterQuestions.splice(index, 1);
    this.snackBar.showMessage('Questão removida com sucesso!', true);
  }
}
