import { QuestionInterface } from '../../questions/interfaces/question.interface';

export interface Exam {
  id: number;
  author?: string;
  user_id?: number;
  subject_id?: number;
  subject_name?: string;
  name: string;
  questions: QuestionInterface[];
  created_at?: Date;
}
