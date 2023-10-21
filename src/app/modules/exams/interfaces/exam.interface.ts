import { QuestionInterface } from '../../questions/interfaces/question.interface';

export interface Exam {
  id?: number;
  author?: string;
  name: string;
  questions: QuestionInterface[];
  createdAt?: Date;
  updatedAt?: Date;
  deleteAt?: Date;
}
