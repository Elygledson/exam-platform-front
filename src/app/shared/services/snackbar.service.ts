import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from 'src/app/snackbar/snackbar.component';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snackBar: MatSnackBar) {}

  showMessage(message: string, isSuccess: boolean): void {
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: 8000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['mat-toolbar', 'snackbar-success'],
      data: {
        message,
      },
    });
  }
}
