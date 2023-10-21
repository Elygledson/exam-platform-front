import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EditQuestionDialogComponent } from '../../../questions/components/edit-question-dialog/edit-question-dialog.component';
import { DefaultCrudService } from '../../../../shared/services/default-crud.service';
import { QuestionInterface } from '../../../questions/interfaces/question.interface';

@Component({
  selector: 'app-dashboard-question',
  templateUrl: './dashboard-question.component.html',
  styleUrls: ['./dashboard-question.component.css'],
})
export class DashboardQuestionComponent {
  filter: string = '';
  filterQuestions: QuestionInterface[] = [];
  questions: QuestionInterface[] = [];

  constructor(
    private crudService: DefaultCrudService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.crudService.httpGet('questions').then((response) => {
      this.filterQuestions = response.questions;
      this.questions = this.filterQuestions;
    });
  }

  navigateToQuestions(): void {
    this.router.navigate(['admin', 'create-question']);
  }

  getStarArray(numStars: number): any[] {
    return Array(numStars).fill(0);
  }

  applyFilter(): void {
    this.filterQuestions = this.questions.filter((question) =>
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
