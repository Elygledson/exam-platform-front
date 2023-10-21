import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ConfirmationDialogComponent } from './shared/confirmation-dialog/confirmation-dialog.component';
import { AdminComponent } from './admin/admin.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { ExamsModule } from './modules/exams/exams.module';
import { QuestionsModule } from './modules/questions/questions.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { AutenticationModule } from './authentication/autentication.module';
import { ExamSubmissionComponent } from './exam-submission/exam-submission.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmationDialogComponent,
    AdminComponent,
    SnackbarComponent,
    ExamSubmissionComponent,
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
