export enum Difficulty {
  EASY = 1,
  MEDIUM = 2,
  HARD = 3,
}

export enum QuestionType {
  BOOLEAN = 1,
  MCQ = 2,
  OPEN = 3,
}

export enum QuestionFrom {
  URL = 'url',
  TEXT = 'text',
}

export interface QuestionInterface {
  id: number;
  user_id: number;
  subject_id: number;
  description: string;
  options: string[];
  answer: string;
  difficulty?: Difficulty;
  category?: string;
  score?: number;
  question_type_id?: QuestionType;
  level: number;
}
