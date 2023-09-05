import { Component } from '@angular/core';

export interface Question {
  id: number;
  text: string;
  options?: string[];
  correctAnswer: string;
  difficulty: Difficulty;
  category: string;
  score: number;
  author: User;
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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isQuestionSelected = false;
  courses = [
    'Matemática',
    'Português',
    'História',
    'Biologia',
    'Química',
    'Física',
    'Geografia',
    'Inglês',
    'Educação Física',
    'Artes',
    'Filosofia',
    'Sociologia',
  ];
  questions: Question[] = [
    {
      id: 1,
      text: 'Qual é a capital da França?',
      options: ['Londres', 'Paris', 'Berlim', 'Madrid'],
      correctAnswer: 'Paris',
      difficulty: Difficulty.EASY,
      category: 'Geografia',
      score: 2.0,
      author: {
        id: 1,
        name: 'Autor 1',
      },
    },
    {
      id: 2,
      text: 'Qual é o maior planeta do sistema solar?',
      options: ['Terra', 'Marte', 'Júpiter', 'Vênus'],
      correctAnswer: 'Júpiter',
      difficulty: Difficulty.MEDIUM,
      category: 'Astronomia',
      score: 3.0,
      author: {
        id: 2,
        name: 'Autor 2',
      },
    },
    {
      id: 2,
      text: 'Qual é o maior planeta do sistema solar?',
      options: ['Terra', 'Marte', 'Júpiter', 'Vênus'],
      correctAnswer: 'Júpiter',
      difficulty: Difficulty.HARD,
      category: 'Astronomia',
      score: 3.0,
      author: {
        id: 2,
        name: 'Autor 2',
      },
    },
  ];

  selectQuestion(question: any) {
    this.isQuestionSelected = !this.isQuestionSelected;
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
}
