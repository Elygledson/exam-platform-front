import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DefaultCrudService } from '../shared/services/default-crud.service';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  profileName = 'João';
  constructor(private authService: AuthService, private router: Router) {}

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
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
