import { QuestionInterface } from '../../questions/interfaces/question.interface';

export interface Exam {
  id?: number;
  author?: string;
  user_id?: number;
  subject_id?: number;
  name: string;
  questions: QuestionInterface[];
  createdAt?: Date;
  updatedAt?: Date;
  deleteAt?: Date;
}
