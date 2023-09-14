import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  constructor(private router: Router) {}

  navigateToHome(): void {
    this.router.navigate(['admin']);
  }

  navigateToCreateExam(): void {
    this.router.navigate(['admin', 'create-exam']);
  }

  navigateToQuestions(): void {}

  logout(): void {}
}
