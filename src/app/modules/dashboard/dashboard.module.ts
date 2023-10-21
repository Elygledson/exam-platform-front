import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { DashboardExamComponent } from './components/dashboard-exam/dashboard-exam.component';
import { DashboardQuestionComponent } from './components/dashboard-question/dashboard-question.component';

@NgModule({
  declarations: [DashboardExamComponent, DashboardQuestionComponent],
  imports: [CommonModule, MaterialModule],
})
export class DashboardModule {}
