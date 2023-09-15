import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Difficulty, Question } from '../exam/exam.component';
import { SnackbarService } from '../shared/services/snackbar.service';

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
    },
    {
      id: 2,
      text: 'Qual das seguintes linguagens de programação é uma linguagem de alto nível?',
      options: ['Assembly', 'C', 'Java', 'Binary'],
      correctAnswer: 'Java',
      difficulty: Difficulty.MEDIUM,
      category: 'Ciência da Computação',
      score: 3,
      author: {
        id: 1,
        name: 'Prof. John Doe',
      },
    },
    {
      id: 2,
      text: 'Qual das seguintes linguagens de programação é uma linguagem de alto nível?',
      options: ['Assembly', 'C', 'Java', 'Binary'],
      correctAnswer: 'Java',
      difficulty: Difficulty.HARD,
      category: 'Ciência da Computação',
      score: 5,
      author: {
        id: 1,
        name: 'Prof. John Doe',
      },
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
    // const dialogRef = this.dialog.open(EditExamDialogComponent, {
    //   width: '400px',
    //   data: { exam: this.filterExams[index] },
    // });
  }

  removeQuestion(index: number): void {
    console.log('');
    this.filterQuestions.splice(index, 1);
    this.snackBar.showMessage('Questão removida com sucesso!', true);
  }
}
