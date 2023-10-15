export enum Difficulty {
  EASY = 'Fácil',
  MEDIUM = 'Médio',
  HARD = 'Difícil',
}

export enum QuestionType {
  BOOLEAN = 'BOOLEAN',
  MCQ = 'MCQ',
  OPEN = 'OPEN',
}

export interface QuestionInterface {
  id: number;
  description: string;
  options: string[];
  answer: string;
  difficulty: Difficulty;
  category: string;
  score: number;
  type?: QuestionType;
}
