import { Component, Input, OnInit } from '@angular/core';
import { DefaultCrudService } from 'src/app/shared/services/default-crud.service';
import { ExamSubmissionInterface } from '../../interfaces/exam-submission.interface';
import { MatDialog } from '@angular/material/dialog';
import { ExamSubmissionDialogComponent } from '../exam-submission-dialog/exam-submission-dialog.component';

@Component({
  selector: 'app-exam-submission',
  templateUrl: './exam-submission.component.html',
  styleUrls: ['./exam-submission.component.css'],
})
export class ExamSubmissionComponent implements OnInit {
  filter: string = '';
  @Input() id!: number;

  submissions: ExamSubmissionInterface[] = [];

  constructor(
    private crudService: DefaultCrudService,
    private dialog: MatDialog
  ) {}

  async ngOnInit() {
    await this.crudService
      .httpPost('submissions', { exam_id: this.id })
      .then((response) => {
        this.submissions = response;
      });
  }

  applyFilter(): void {}

  showExam(submission: number): void {
    this.dialog.open(ExamSubmissionDialogComponent, {
      data: this.submissions[submission],
      width: '700px',
      height: '1000px',
    });
  }
}
