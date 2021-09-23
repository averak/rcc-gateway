import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from 'src/app/shared/component/snack-bar/snack-bar.component';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(message: string, type: 'SUCCESS' | 'INFO' | 'WARN' | 'ERROR'): void {
    const duration = type == 'ERROR' ? -1 : 5000;

    this.snackBar.openFromComponent(SnackBarComponent, {
      duration: duration,
      data: { message: message, level: type },
    });
  }
}