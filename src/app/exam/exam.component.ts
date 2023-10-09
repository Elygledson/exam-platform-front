import { Component } from '@angular/core';
import {
  Difficulty,
  Question,
  QuestionType,
} from '../exam-generator/exam-generator.component';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css'],
})
export class ExamComponent {
  public submitted = false;
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
      type: QuestionType.mcq,
    },
    {
      id: 4,
      description:
        'O que significa a sigla "HTTP" em termos de protocolos de comunicação na web?',
      options: [
        'HyperText Transfer Protocol',
        'High-Tech Transfer Protocol',
        'HyperTransfer Text Protocol',
        'HyperTech Text Protocol',
      ],
      answer: 'HyperText Transfer Protocol',
      difficulty: Difficulty.MEDIUM,
      category: 'Redes de Computadores',
      score: 2.5,
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
      type: QuestionType.mcq,
    },
  ];

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
