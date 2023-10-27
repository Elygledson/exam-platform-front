import { QuestionInterface } from '../../questions/interfaces/question.interface';

export interface ExamSubmissionInterface {
  id: number;
  register: string;
  name: string;
  exam_id: number;
  score: number;
  created_at: string;
  updated_at: string;
  answers: Answer[];
}

export interface Answer {
  id: number;
  submission_id: number;
  exam_id: number;
  question_id: number;
  answer: string;
  assert: number;
  created_at: string;
  updated_at: string;
  question: QuestionInterface;
}
