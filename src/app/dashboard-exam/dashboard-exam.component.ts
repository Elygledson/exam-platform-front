import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditExamDialogComponent } from '../shared/edit-exam-dialog/edit-exam-dialog.component';
import { Router } from '@angular/router';
import { QuestionInterface } from '../shared/interfaces/question.interface';
import { DefaultCrudService } from '../shared/services/default-crud.service';

export interface Exam {
  author?: string;
  name: string;
  questions: QuestionInterface[];
  createdAt?: Date;
  updatedAt?: Date;
  deleteAt?: Date;
}

@Component({
  selector: 'app-dashboard-exam',
  templateUrl: './dashboard-exam.component.html',
  styleUrls: ['./dashboard-exam.component.css'],
})
export class DashboardExamComponent {
  filter: string = '';
  filterExams: Exam[] = [];

  constructor(
    private crudService: DefaultCrudService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.crudService.httpGet('exams').then((response) => {
      this.filterExams = response.exams;
    });
  }

  navigateToCreateExam(): void {
    this.router.navigate(['admin', 'create-exam']);
  }

  applyFilter(): void {
    this.filterExams = this.filterExams.filter((exame) =>
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
    this.filterExams.splice(index, 1);
  }
}
