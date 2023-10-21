import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { EditQuestionDialogComponent } from './components/edit-question-dialog/edit-question-dialog.component';
import { QuestionGeneratorComponent } from 'src/app/modules/questions/components/question-generator/question-generator.component';

@NgModule({
  declarations: [EditQuestionDialogComponent, QuestionGeneratorComponent],
  imports: [CommonModule, MaterialModule],
})
export class QuestionsModule {}
