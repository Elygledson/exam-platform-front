import { Component, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-exam-dialog',
  templateUrl: './edit-exam-dialog.component.html',
  styleUrls: ['./edit-exam-dialog.component.css'],
})
export class EditExamDialogComponent {
  // editForm!: FormGroup;
  // constructor(
  //   private dialogRef: MatDialogRef<EditExamDialogComponent>,
  //   @Inject(MAT_DIALOG_DATA) public data: { exam: Exam },
  //   private formBuilder: FormBuilder
  // ) {
  //   // Inicialize o formulário com os dados da prova e das questões
  //   this.editForm = this.formBuilder.group({
  //     name: data.exam.name,
  //     questions: this.formBuilder.array([]), // Inicialize um FormArray vazio
  //     // Adicione campos de edição para outras propriedades da questão aqui
  //   });
  //   // Preencha o FormArray com questões existentes
  //   const questionsFormArray = this.editForm.get('questions') as FormArray;
  //   data.exam.questions.forEach((question) => {
  //     questionsFormArray.push(this.formBuilder.control(question.text));
  //   });
  // }
  // onSubmit() {
  //   const editedExam: Exam = {
  //     ...this.data.exam,
  //     name: this.editForm.value.name,
  //     author: this.editForm.value.author,
  //     createdAt: this.editForm.value.createdAt,
  //   };
  //   this.dialogRef.close(editedExam);
  // }
  // onCancel() {
  //   this.dialogRef.close();
  // }
}
