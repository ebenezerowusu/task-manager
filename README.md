# Task Management Service

A full-stack application for managing tasks with user authentication, built using **Laravel** (backend API) and **AngularJS** (frontend).

![Task Manager Screenshot](screenshot.png) <!-- Add a screenshot later -->

## Features

- **User Authentication**
  - Registration & Login
  - JWT Token-based Authorization
- **Task Management**
  - Create, Read, Update, Delete (CRUD) tasks
  - Task attributes: Title, Description, Priority, Status, Deadline
- **Filtering & Sorting**
  - Filter tasks by Priority, Status, and Deadline
- **User-Specific Data**
  - Users can only access their own tasks
  - Secure API endpoints

## Tech Stack

**Backend**  
- Laravel
- MySQL
- Laravel Sanctum (API Authentication)

**Frontend**  
- AngularJS
- HTML5/Tailwind 

## Installation

### Backend (Laravel)

1. **Clone the repository**
   ```bash
   git clone https://github.com/ebenezerowusu/task-manager.git
   cd task-manager/backend

2. **Install Dependencies**
    ```bash
    composer install

3. **Configure environment**
- Copy .env.example to .env
- Update database credentials:
    ```ini
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=task_manager
    DB_USERNAME=root
    DB_PASSWORD=

4. **Generate application key**
    ```bash
    php artisan key:generate

5. **Run migrations**
    ```bash
    php artisan migrate

6. **Start the server**
    ```bash
    php artisan serve --port=8000

### Frontend (AngularJS)
1. **Navigate to frontend directory**
    ```bash
    cd ../frontend

2. **Install dependencies**
    ```bash
    npm install -g live-server

3. **Configure API endpoint**
    Edit app/js/services/authService.js and taskService.js:
    ```javascript
    const apiBase = 'http://localhost:8000/api/';

4. **Start the application**
    ```bash
    live-server --port=8001


## Configuration
### CORS Setup (Backend)
    Ensure config/cors.php includes:
    
    ``php
    'paths' => ['api/*'],
    'allowed_origins' => ['http://localhost:8001'],
    'allowed_methods' => ['*'],

### Environment Variables (Backend)
    ``ini
    SANCTUM_STATEFUL_DOMAINS=localhost:8001
    SESSION_DOMAIN=localhost
