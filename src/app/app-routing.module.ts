import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
  provideRouter,
  withComponentInputBinding,
} from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ExamGeneratorComponent } from './modules/exams/components/exam-generator/exam-generator.component';
import { DashboardExamComponent } from './modules/dashboard/components/dashboard-exam/dashboard-exam.component';
import { DashboardQuestionComponent } from './modules/dashboard/components/dashboard-question/dashboard-question.component';
import { QuestionGeneratorComponent } from './modules/questions/components/question-generator/question-generator.component';
import { ExamComponent } from './modules/exams/exam.component';
import { ExamSubmissionComponent } from './modules/exams/components/exam-submission/exam-submission.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', component: DashboardExamComponent },
      { path: 'questions', component: DashboardQuestionComponent },
      { path: 'create-exam', component: ExamGeneratorComponent },
      { path: 'exam-submission', component: ExamSubmissionComponent },
      { path: 'create-question', component: QuestionGeneratorComponent },
    ],
  },
  { path: 'exam/:id', component: ExamComponent },

  { path: '', redirectTo: 'admin', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [provideRouter(routes, withComponentInputBinding())],
})
export class AppRoutingModule {}
