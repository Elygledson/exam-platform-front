import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ConfirmationDialogComponent } from './shared/confirmation-dialog/confirmation-dialog.component';
import { AdminComponent } from './admin/admin.component';
import { ExamGeneratorComponent } from './modules/exams/components/exam-generator/exam-generator.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { LoginComponent } from './authentication/components/login/login.component';
import { RegisterComponent } from './authentication/components/register/register.component';
import { EditExamDialogComponent } from './modules/exams/components/edit-exam-dialog/edit-exam-dialog.component';
import { DashboardExamComponent } from './modules/dashboard/components/dashboard-exam/dashboard-exam.component';
import { DashboardQuestionComponent } from './modules/dashboard/components/dashboard-question/dashboard-question.component';
import { EditQuestionDialogComponent } from './modules/questions/components/edit-question-dialog/edit-question-dialog.component';
import { QuestionGeneratorComponent } from './modules/questions/components/question-generator/question-generator.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { ExamsModule } from './modules/exams/exams.module';
import { QuestionsModule } from './modules/questions/questions.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { AutenticationModule } from './authentication/autentication.module';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmationDialogComponent,
    AdminComponent,
    SnackbarComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ExamsModule,
    QuestionsModule,
    DashboardModule,
    AutenticationModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
