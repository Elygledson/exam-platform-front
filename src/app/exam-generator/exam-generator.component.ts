import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../shared/confirmation-dialog/confirmation-dialog.component';

export enum QuestionType {
  boolean = 'Boolean Question',
  mcq = 'Multiple Choice Question',
  open = 'Open Question',
}
export interface Question {
  id: number;
  description: string;
  options: string[];
  answer: string;
  difficulty: Difficulty;
  category: string;
  score: number;
  author: User;
  type?: QuestionType;
}

export enum Difficulty {
  EASY = 'Fácil',
  MEDIUM = 'Médio',
  HARD = 'Difícil',
}

export interface User {
  id: number;
  name: string;
}

@Component({
  selector: 'app-exam',
  templateUrl: './exam-generator.component.html',
  styleUrls: ['./exam-generator.component.css'],
})
export class ExamGeneratorComponent {
  public selectedQuestions: Question[] = [];
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

  questions: Question[] = [
    {
      id: 1,
      description:
        'Qual é a linguagem de programação mais comumente usada para ensinar conceitos básicos de programação?',
      options: ['Python', 'Java', 'C++', 'Ruby'],
      answer: 'Python',
      difficulty: Difficulty.EASY,
      category: 'Introdução à Programação',
      score: 2.0,
      author: {
        id: 1,
        name: 'Autor 1',
      },
      type: QuestionType.mcq,
    },
    {
      id: 2,
      description:
        'Qual é a estrutura de dados usada para representar uma coleção de elementos únicos?',
      options: ['Pilha', 'Fila', 'Conjunto', 'Lista Encadeada'],
      answer: 'Conjunto',
      difficulty: Difficulty.MEDIUM,
      category: 'Algoritmos e Estruturas de Dados',
      score: 3.0,
      author: {
        id: 2,
        name: 'Autor 2',
      },
      type: QuestionType.mcq,
    },
    {
      id: 3,
      description:
        'Qual linguagem é comumente usada para consultas em bancos de dados relacionais?',
      options: ['HTML', 'SQL', 'JavaScript', 'Python'],
      answer: 'SQL',
      difficulty: Difficulty.HARD,
      category: 'Banco de Dados e Sistemas de Gerenciamento',
      score: 3.0,
      author: {
        id: 2,
        name: 'Autor 2',
      },
      type: QuestionType.mcq,
    },
    {
      id: 4,
      description:
        'O que significa a sigla "HTTP" em termos de protocolos de comunicação na web?',
      options: [
        'HyperText Transfer Protocol',
        'High-Tech Transfer Protocol',
        'HyperTransfer description Protocol',
        'HyperTech description Protocol',
      ],
      answer: 'HyperText Transfer Protocol',
      difficulty: Difficulty.MEDIUM,
      category: 'Redes de Computadores',
      score: 2.5,
      author: {
        id: 3,
        name: 'Autor 3',
      },
      type: QuestionType.mcq,
    },
    {
      id: 5,
      description:
        'Qual é o ciclo de desenvolvimento de software que enfatiza a entrega contínua de software funcional?',
      options: [
        'Modelo em Cascata',
        'Scrum',
        'Modelo Espiral',
        'Desenvolvimento em V',
      ],
      answer: 'Scrum',
      difficulty: Difficulty.EASY,
      category: 'Engenharia de Software',
      score: 2.0,
      author: {
        id: 1,
        name: 'Autor 1',
      },
      type: QuestionType.mcq,
    },
    {
      id: 6,
      description:
        'Qual subcampo da inteligência artificial se concentra em ensinar máquinas a aprender com dados?',
      options: [
        'Processamento de Linguagem Natural',
        'Visão Computacional',
        'Aprendizado de Máquina',
        'Lógica Fuzzy',
      ],
      answer: 'Aprendizado de Máquina',
      difficulty: Difficulty.MEDIUM,
      category: 'Inteligência Artificial',
      score: 3.0,
      author: {
        id: 2,
        name: 'Autor 2',
      },
      type: QuestionType.mcq,
    },
  ];

  constructor(public dialog: MatDialog) {}

  generatePdf(): void {}

  openConfirmationDialog(): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent);
  }

  stepperSelectionChange(event: any): void {
    if (event.selectedStep) this.selectedStepper = event.selectedIndex;
  }

  selectQuestion(newQuestion: Question) {
    console.log(newQuestion);
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
