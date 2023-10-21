import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { ExamComponent } from './exam.component';
import { ExamGeneratorComponent } from './components/exam-generator/exam-generator.component';
import { EditExamDialogComponent } from './components/edit-exam-dialog/edit-exam-dialog.component';

@NgModule({
  declarations: [
    ExamComponent,
    EditExamDialogComponent,
    ExamGeneratorComponent,
  ],
  imports: [CommonModule, MaterialModule],
})
export class ExamsModule {}
