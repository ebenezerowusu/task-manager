import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlertService } from '../../services/alert/alert.service';
import { LoaderComponent } from '../loader/loader.component';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule,  RouterLink, RouterLinkActive, AlertComponent, LoaderComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  fb = inject(FormBuilder);
  loading = false;

  constructor(private alertService: AlertService) { }
  
  form = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  onSubmit(): void {
   /*  if (this.loading) return;
    const rawForm = this.form.getRawValue();
    this.authService
      .login(rawForm.email, rawForm.password)
      .subscribe((result) => {
        if (result.error) {
          this.Alert('error', 'Login Error', result.error.message);
          this.loading = false;
        } else {
          this.loading = false;
          this.Alert(
            'white',
            'Login Successful!',
            'Welcome back to Only Used Tesla Tracking! You are now logged in and ready to continue tracking and managing your Tesla experience.',
          );
          this.router.navigateByUrl('/manage/price');
        }
      });*/
  } 

  Alert(
    alertType: 'error' | 'success' | 'info' | 'warning' | 'white',
    alertTitle: string,
    alertMessage: string,
  ) {
    this.alertService.showAlert({
      title: alertTitle,
      message: alertMessage,
      type: alertType,
      duration: 5000,
      position: 'top-right',
    });
  }
}
