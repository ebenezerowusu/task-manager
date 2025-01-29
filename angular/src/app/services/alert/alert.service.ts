import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IAlert } from '../../models/ialert';


@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private alertSubject = new BehaviorSubject<IAlert[]>([]);
  alerts$ = this.alertSubject.asObservable();

  showAlert(alert: IAlert): void {
    const currentAlerts = this.alertSubject.value;
    this.alertSubject.next([...currentAlerts, alert]);

    if (alert.duration && alert.duration > 0) {
      setTimeout(() => this.removeAlerts(alert), alert.duration);
    }
  }

  removeAlerts(alert: IAlert): void {
    const currentAlerts = this.alertSubject.value;
    this.alertSubject.next(currentAlerts.filter((a) => a !== alert));
  }
}
