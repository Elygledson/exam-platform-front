import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EditQuestionDialogComponent } from '../shared/edit-question-dialog/edit-question-dialog.component';
import { QuestionInterface } from '../shared/interfaces/question.interface';
import { DefaultCrudService } from '../shared/services/default-crud.service';

@Component({
  selector: 'app-dashboard-question',
  templateUrl: './dashboard-question.component.html',
  styleUrls: ['./dashboard-question.component.css'],
})
export class DashboardQuestionComponent {
  filter: string = '';
  filterQuestions: QuestionInterface[] = [];

  constructor(
    private crudService: DefaultCrudService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.crudService.httpGet('questions').then((response) => {
      this.filterQuestions = response.questions;
    });
  }

  navigateToQuestions(): void {
    this.router.navigate(['admin', 'create-question']);
  }

  getStarArray(numStars: number): any[] {
    return Array(numStars).fill(0);
  }

  applyFilter(): void {
    this.filterQuestions = this.filterQuestions.filter((question) =>
      question.category.toLowerCase().includes(this.filter.toLowerCase())
    );
  }

  editQuestion(index: number): void {
    this.dialog.open(EditQuestionDialogComponent, {
      width: '700px',
      data: this.filterQuestions[index],
    });
  }

  removeQuestion(index: number): void {
    this.crudService
      .httpDelete(`questions/${this.filterQuestions[index].id}`)
      .then((response) => this.filterQuestions.splice(index, 1));
  }
}
