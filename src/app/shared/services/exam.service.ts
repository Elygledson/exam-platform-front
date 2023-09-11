import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environment';
import { User } from './user.service';
import { Question } from 'src/app/exam/exam.component';
import { Observable, take } from 'rxjs';
import { Exam } from 'src/app/admin/admin.component';

export interface CreateExamDto {
  author: User;
  questions: Question[];
}

@Injectable({
  providedIn: 'root',
})
export class ExamService {
  constructor(private http: HttpClient) {}

  createExam(exam: CreateExamDto): void {
    this.http.post(`${environment.api}/exams`, { exam }).pipe(take(1));
  }

  deleteExam(id: string): void {
    this.http.delete(`${environment.api}/exams/${id}`).pipe(take(1));
  }

  getExamById(id: string): Observable<Exam> {
    return this.http.get<Exam>(`${environment.api}/exams/${id}`).pipe(take(1));
  }

  getExams(): Observable<Exam[]> {
    return this.http.get<Exam[]>(`${environment.api}/exams`).pipe(take(1));
  }
}
