export enum Difficulty {
  EASY = 'Fácil',
  MEDIUM = 'Médio',
  HARD = 'Difícil',
}

export enum QuestionType {
  boolean = 'BOOLEAN',
  mcq = 'MCQ',
  open = 'OPEN',
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
