import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  profileName = 'João';
  constructor(private router: Router) {}

  navigateToHome(): void {
    this.router.navigate(['admin']);
  }

  navigateToViewExams(): void {
    this.router.navigate(['admin']);
  }

  navigateToViewQuestions(): void {
    this.router.navigate(['admin', 'questions']);
  }

  navigateToCreateExam(): void {
    this.router.navigate(['admin', 'create-exam']);
  }

  navigateToQuestions(): void {
    this.router.navigate(['admin', 'create-question']);
  }

  logout(): void {
    this.router.navigate(['login']);
  }
}
