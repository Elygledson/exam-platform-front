import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snackBar: MatSnackBar) {}

  showMessage(message: string, isSuccess: boolean): void {
    this.snackBar.open(message, '', {
      duration: 2500,
      panelClass: isSuccess
        ? 'app-notification-success'
        : 'app-notification-error',
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
}
