import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
  provideRouter,
  withComponentInputBinding,
} from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ExamComponent } from './exam/exam.component';
import { LoginComponent } from './login/login.component';
import { DashboardExamComponent } from './dashboard-exam/dashboard-exam.component';
import { DashboardQuestionComponent } from './dashboard-question/dashboard-question.component';
import { QuestionComponent } from './question/question.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', component: DashboardExamComponent },
      { path: 'questions', component: DashboardQuestionComponent },
      { path: 'create-exam', component: ExamComponent },
      { path: 'create-question', component: QuestionComponent },
    ],
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [provideRouter(routes, withComponentInputBinding())],
})
export class AppRoutingModule {}
