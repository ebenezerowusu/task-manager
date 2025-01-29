import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IAlert } from '../../models/ialert';
import { AlertService } from '../../services/alert/alert.service';


@Component({
  selector: 'out-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss',
})
export class AlertComponent implements OnInit {
  alerts: IAlert[] = [];

  constructor(private alertService: AlertService) {}

  ngOnInit(): void {
    this.alertService.alerts$.subscribe((alerts) => {
      this.alerts = alerts;
    });
  }

  closeAlert(alert: IAlert) {
    this.alertService.removeAlerts(alert);
  }

  getPositionClasses(position: IAlert['position']) {
    switch (position) {
      case 'top-left':
        return 'top-8 left-8';
      case 'top-right':
        return 'top-8 right-8';
      case 'bottom-left':
        return 'bottom-8 left-8';
      case 'bottom-right':
        return 'bottom-8 right-8';
      default:
        return 'top-8 right-8';
    }
  }

  getAlertClasses(type: string): string {
    switch (type) {
      case 'success':
        return 'bg-green-500 border-green-500 text-white';
      case 'error':
        return 'bg-red-500 border-red-500 text-white';
      case 'warning':
        return 'bg-yellow-500 border-yellow-500 text-white';
      case 'info':
        return 'bg-blue-500 border-blue-500 text-white';
      case 'white':
        return 'bg-white border-white text-black';
      default:
        return '';
    }
  }
}
