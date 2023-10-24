import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditExamDialogComponent } from '../../../exams/components/edit-exam-dialog/edit-exam-dialog.component';
import { Router } from '@angular/router';
import { DefaultCrudService } from '../../../../shared/services/default-crud.service';
import { Exam } from '../../../exams/interfaces/exam.interface';

@Component({
  selector: 'app-dashboard-exam',
  templateUrl: './dashboard-exam.component.html',
  styleUrls: ['./dashboard-exam.component.css'],
})
export class DashboardExamComponent {
  filter: string = '';
  exams: Exam[] = [];
  filterExams: Exam[] = [];

  constructor(
    private crudService: DefaultCrudService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.crudService.httpPost('exams', { user_id: 1 }).then((response) => {
      this.exams = response;
      this.filterExams = this.exams;
    });
  }

  navigateToCreateExam(): void {
    this.router.navigate(['admin', 'create-exam']);
  }

  checkSubmissions(): void {
    this.router.navigate(['admin/exam-submission']);
  }

  applyFilter(): void {
    this.filterExams = this.exams.filter((exame) =>
      exame.name.toLowerCase().includes(this.filter.toLowerCase())
    );
  }

  removeExam(index: number): void {
    this.crudService
      .httpDelete(`exams/destroy/${this.filterExams[index].id}`)
      .then(() => this.filterExams.splice(index, 1));
  }
}
