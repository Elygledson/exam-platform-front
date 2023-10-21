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
  filterExams: Exam[] = [];
  exams: Exam[] = [];
  constructor(
    private crudService: DefaultCrudService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.crudService.httpGet('exams').then((response) => {
      this.exams = response.exams;
      this.filterExams = this.exams;
    });
  }

  navigateToCreateExam(): void {
    this.router.navigate(['admin', 'create-exam']);
  }

  applyFilter(): void {
    this.filterExams = this.exams.filter((exame) =>
      exame.name.toLowerCase().includes(this.filter.toLowerCase())
    );
  }

  editExam(index: number): void {
    const dialogRef = this.dialog.open(EditExamDialogComponent, {
      width: '400px',
      data: { exam: this.filterExams[index] },
    });
  }

  removeExam(index: number): void {
    this.crudService
      .httpDelete(`exams/${this.filterExams[index].id}`)
      .then(() => this.filterExams.splice(index, 1));
  }
}