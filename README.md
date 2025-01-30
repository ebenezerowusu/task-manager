# Task Management Service

A full-stack application for managing tasks with user authentication, built using **Laravel** (backend API) and **AngularJS** (frontend).

![Macbook-Air-localhost](https://github.com/user-attachments/assets/526e9af2-07cf-4e95-a4fe-2b6483eeb7ef)
![Macbook-Air-127 0 0 1](https://github.com/user-attachments/assets/35eab68d-6da0-4225-a74d-5b1127d9783d)
![Macbook-Air-localhost (3)](https://github.com/user-attachments/assets/c0c02692-1e99-471b-aab5-38617b13cd0b)
![Macbook-Air-localhost (2)](https://github.com/user-attachments/assets/6173b28d-8140-4e75-80be-3ef906b82d6e)
![Macbook-Air-localhost (1)](https://github.com/user-attachments/assets/e50748b2-8420-42ea-b4a1-7a45f589a144)



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
- HTML/Tailwindcss

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

## Running the Application

1. **Backend**
    ```bash
    php artisan serve --port=8000

2. **Frontend**
    ```bash
    live-server --port=8001

3. **Access the application at:**
http://localhost:8001 or http://127.0.0.1:8001/


## Testing
1. **Create User**
    - Navigate to http://localhost:8001/#!/register
    - Enter name, email, and password

2. **Login**
    - Use registered credentials at http://localhost:8001/#!/login

3. **Manage Tasks**
 - Create tasks with title, description, priority, status, and deadline
 - Filter tasks using the dropdowns
 - Edit/Delete existing tasks

 ### Sample Credentials
  - eo199124@gmail.com
  - qwerty1212
