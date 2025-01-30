angular.module('taskManagerApp', ['ngRoute'])
.config(['$routeProvider', '$httpProvider', '$locationProvider', 
function($routeProvider, $httpProvider, $locationProvider) {
    
    $locationProvider.hashPrefix('!');
    
    
    $routeProvider
    .when('/login', {
        templateUrl: 'app/views/login.html',
        controller: 'AuthController'
    })
    .when('/register', {
        templateUrl: 'app/views/register.html',
        controller: 'AuthController'
    })
    .when('/tasks', {
        templateUrl: 'app/views/dashboard.html',
        controller: 'TaskController',
        resolve: {
            auth: ['authService', function(authService) {
                return authService.isLoggedIn();
            }]
        }
    })
    .when('/tasks/new', {
        templateUrl: 'app/views/task-form.html',
        controller: 'TaskController',
        resolve: {
            auth: ['authService', function(authService) {
                return authService.isLoggedIn();
            }]
        }
    })
    .when('/tasks/:id/edit', {
        templateUrl: 'app/views/task-form.html',
        controller: 'TaskController',
        resolve: {
            auth: ['authService', function(authService) {
                return authService.isLoggedIn();
            }]
        }
    })
    .otherwise({ redirectTo: '/login' });

    $httpProvider.interceptors.push(['$q', '$location', '$injector', 
    function($q, $location, $injector) {
        return {
            request: function(config) {
                const token = localStorage.getItem('auth_token');
                if (token && config.url.startsWith('http://localhost:8000/api')) {
                    config.headers.Authorization = 'Bearer ' + token;
                }
                return config;
            },
            responseError: function(error) {
                if (error.status === 401 || error.status === 403) {
                    const authService = $injector.get('authService');
                    authService.logout();
                    $location.path('/login');
                }
                return $q.reject(error);
            }
        };
    }]);
}]);