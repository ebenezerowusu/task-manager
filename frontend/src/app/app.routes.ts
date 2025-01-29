import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/layout/layout.component').then(m => m.LayoutComponent),
        children: [
            {
                path: '',
                redirectTo: 'auth/login',
                pathMatch: 'full'
            },
            {
                path: 'auth',
                loadComponent: () => import('./pages/auth/auth.component').then(m => m.AuthComponent),
                children: [
                    {
                        path: 'login',
                        loadComponent: () => import('./components/login-form/login-form.component').then(m => m.LoginFormComponent),
                    },
                    {
                        path: 'register',
                        loadComponent: () => import('./components/register-form/register-form.component').then(m => m.RegisterFormComponent),
                    }
                    
                ]
            },
            {
                path: 'tasks',
                loadComponent: () => import('./pages/task-page/task-page.component').then(m => m.TaskPageComponent),
            }
        ]
    }
];
