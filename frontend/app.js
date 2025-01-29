// app.js
var taskManagementApp = angular.module('taskManagementApp', ['ngRoute']);

taskManagementApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/login.html',
            controller: 'AuthController'
        })
        .when('/register', {
            templateUrl: 'views/register.html',
            controller: 'AuthController'
        })
        .when('/task', {
            templateUrl: 'views/tasks.html',
            controller: 'TaskController'
        })
        .otherwise({
            redirectTo: '/'
        });
});