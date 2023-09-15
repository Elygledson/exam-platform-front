import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ConfirmationDialogComponent } from './shared/confirmation-dialog/confirmation-dialog.component';
import { AdminComponent } from './admin/admin.component';
import { ExamComponent } from './exam/exam.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EditExamDialogComponent } from './shared/edit-exam-dialog/edit-exam-dialog.component';
import { DashboardExamComponent } from './dashboard-exam/dashboard-exam.component';
import { DashboardQuestionComponent } from './dashboard-question/dashboard-question.component';
import { QuestionComponent } from './question/question.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmationDialogComponent,
    AdminComponent,
    ExamComponent,
    LoginComponent,
    RegisterComponent,
    EditExamDialogComponent,
    DashboardExamComponent,
    DashboardQuestionComponent,
    QuestionComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
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
