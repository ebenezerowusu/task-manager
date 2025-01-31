angular.module('tManagement', ['ngRoute'])
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
            /**
             * Modifies the request configuration if the request is being made to the
             * localhost API and the user is logged in.
             * 
             * @param {Object} config The request configuration
             * @returns {Object} The modified request configuration
             */
            request: function(config) {
                const token = localStorage.getItem('auth_token');
                // If the user is logged in and the request is being made to the
                // localhost API, add the Authorization header with the Bearer token
                if (token && config.url.startsWith('http://localhost:8000/api')) {
                    config.headers.Authorization = 'Bearer ' + token;
                }
                return config;
            },
            /**
             * Intercepts any response errors and checks if the error is a 401 (Unauthorized)
             * or 403 (Forbidden) error. If the error is one of these, the user is logged out
             * and redirected to the login page.
             * 
             * @param {Object} error The error object
             * @returns {Promise} The rejected promise with the error
             */
            responseError: function(error) {
                // Check if the error is a 401 (Unauthorized) or 403 (Forbidden) error
                if (error.status === 401 || error.status === 403) {
                    // Get an instance of the authService
                    const authService = $injector.get('authService');
                    // Log the user out
                    authService.logout();
                    // Redirect the user to the login page
                    $location.path('/login');
                }
                // Return the rejected promise with the error
                return $q.reject(error);
            }
        };
    }]);
}]);