import { Component } from '@angular/core';
import { Difficulty, Question } from '../exam/exam.component';
import { MatDialog } from '@angular/material/dialog';
import { EditExamDialogComponent } from '../shared/edit-exam-dialog/edit-exam-dialog.component';
import { Router } from '@angular/router';
import { SnackbarService } from '../shared/services/snackbar.service';

export interface Exam {
  author: string;
  name: string;
  questions: Question[];
  createdAt: Date;
}

@Component({
  selector: 'app-dashboard-exam',
  templateUrl: './dashboard-exam.component.html',
  styleUrls: ['./dashboard-exam.component.css'],
})
export class DashboardExamComponent {
  examsDone: number = 10;
  examsProgress: number = 15;
  totalExams: number = 30;
  totalQuestions: number = 300;
  filter: string = '';
  filterExams: Exam[] = [];
  exams: Exam[] = [
    {
      author: 'Elygledson',
      name: 'Exame de Introdução à Programação',
      questions: [
        {
          id: 1,
          text: 'Qual é o termo usado para se referir a um espaço de armazenamento de dados em um computador?',
          options: ['Bit', 'Byte', 'Disco Rígido', 'Memória RAM'],
          correctAnswer: 'Byte',
          difficulty: Difficulty.EASY,
          category: 'Ciência da Computação',
          score: 10,
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
          score: 15,
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
          score: 15,
          author: {
            id: 1,
            name: 'Prof. John Doe',
          },
        },
      ],
      createdAt: new Date('2022-01-15'),
    },
    {
      author: 'Elygledson',
      name: 'Exame de Estruturas de Dados',
      questions: [
        {
          id: 3,
          text: 'Qual das seguintes estruturas de dados é usada para representar relacionamentos muitos-para-muitos?',
          options: ['Árvore Binária', 'Lista Encadeada', 'Grafo', 'Fila'],
          correctAnswer: 'Grafo',
          difficulty: Difficulty.MEDIUM,
          category: 'Ciência da Computação',
          score: 20,
          author: {
            id: 2,
            name: 'Prof. Jane Smith',
          },
        },
        {
          id: 4,
          text: 'O que é uma pilha (stack) em estruturas de dados?',
          options: [
            'Uma estrutura que segue o princípio "o último a entrar é o primeiro a sair"',
            'Um tipo de árvore',
            'Uma lista linear',
            'Uma matriz bidimensional',
          ],
          correctAnswer:
            'Uma estrutura que segue o princípio "o último a entrar é o primeiro a sair"',
          difficulty: Difficulty.MEDIUM,
          category: 'Ciência da Computação',
          score: 20,
          author: {
            id: 2,
            name: 'Prof. Jane Smith',
          },
        },
      ],
      createdAt: new Date('2022-02-20'),
    },
    {
      author: 'Elygledson',
      name: 'Exame de Estruturas de Dados',
      questions: [
        {
          id: 3,
          text: 'Qual das seguintes estruturas de dados é usada para representar relacionamentos muitos-para-muitos?',
          options: ['Árvore Binária', 'Lista Encadeada', 'Grafo', 'Fila'],
          correctAnswer: 'Grafo',
          difficulty: Difficulty.MEDIUM,
          category: 'Ciência da Computação',
          score: 20,
          author: {
            id: 2,
            name: 'Prof. Jane Smith',
          },
        },
        {
          id: 4,
          text: 'O que é uma pilha (stack) em estruturas de dados?',
          options: [
            'Uma estrutura que segue o princípio "o último a entrar é o primeiro a sair"',
            'Um tipo de árvore',
            'Uma lista linear',
            'Uma matriz bidimensional',
          ],
          correctAnswer:
            'Uma estrutura que segue o princípio "o último a entrar é o primeiro a sair"',
          difficulty: Difficulty.MEDIUM,
          category: 'Ciência da Computação',
          score: 20,
          author: {
            id: 2,
            name: 'Prof. Jane Smith',
          },
        },
      ],
      createdAt: new Date('2022-02-20'),
    },
    {
      author: 'Elygledson',
      name: 'Exame de Estruturas de Dados',
      questions: [
        {
          id: 3,
          text: 'Qual das seguintes estruturas de dados é usada para representar relacionamentos muitos-para-muitos?',
          options: ['Árvore Binária', 'Lista Encadeada', 'Grafo', 'Fila'],
          correctAnswer: 'Grafo',
          difficulty: Difficulty.MEDIUM,
          category: 'Ciência da Computação',
          score: 20,
          author: {
            id: 2,
            name: 'Prof. Jane Smith',
          },
        },
        {
          id: 4,
          text: 'O que é uma pilha (stack) em estruturas de dados?',
          options: [
            'Uma estrutura que segue o princípio "o último a entrar é o primeiro a sair"',
            'Um tipo de árvore',
            'Uma lista linear',
            'Uma matriz bidimensional',
          ],
          correctAnswer:
            'Uma estrutura que segue o princípio "o último a entrar é o primeiro a sair"',
          difficulty: Difficulty.MEDIUM,
          category: 'Ciência da Computação',
          score: 20,
          author: {
            id: 2,
            name: 'Prof. Jane Smith',
          },
        },
      ],
      createdAt: new Date('2022-02-20'),
    },
    {
      author: 'Elygledson',
      name: 'Exame de Estruturas de Dados',
      questions: [
        {
          id: 3,
          text: 'Qual das seguintes estruturas de dados é usada para representar relacionamentos muitos-para-muitos?',
          options: ['Árvore Binária', 'Lista Encadeada', 'Grafo', 'Fila'],
          correctAnswer: 'Grafo',
          difficulty: Difficulty.MEDIUM,
          category: 'Ciência da Computação',
          score: 20,
          author: {
            id: 2,
            name: 'Prof. Jane Smith',
          },
        },
        {
          id: 4,
          text: 'O que é uma pilha (stack) em estruturas de dados?',
          options: [
            'Uma estrutura que segue o princípio "o último a entrar é o primeiro a sair"',
            'Um tipo de árvore',
            'Uma lista linear',
            'Uma matriz bidimensional',
          ],
          correctAnswer:
            'Uma estrutura que segue o princípio "o último a entrar é o primeiro a sair"',
          difficulty: Difficulty.MEDIUM,
          category: 'Ciência da Computação',
          score: 20,
          author: {
            id: 2,
            name: 'Prof. Jane Smith',
          },
        },
      ],
      createdAt: new Date('2022-02-20'),
    },
  ];

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private snackbar: SnackbarService
  ) {}

  ngOnInit() {
    this.filterExams = this.exams;
  }

  navigateToCreateExam(): void {
    this.router.navigate(['admin', 'create-exam']);
  }

  applyFilter(): void {
    this.filterExams = this.exams.filter((exame) =>
      exame.name.toLowerCase().includes(this.filter.toLowerCase())
    );
  }

  editExam(index: number): void {
    const dialogRef = this.dialog.open(EditExamDialogComponent, {
      width: '400px',
      data: { exam: this.filterExams[index] },
    });
  }

  removeExam(index: number): void {
    this.filterExams.splice(index, 1);
    this.snackbar.showMessage('Prova removida com sucesso!', true);
  }
}
