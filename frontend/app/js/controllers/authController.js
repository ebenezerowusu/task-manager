angular.module('taskManagerApp')
.controller('AuthController', ['$scope', 'authService', '$location', 
function($scope, authService, $location) {
    $scope.user = {};
    
    $scope.login = function() {
        authService.login($scope.user).then(() => {
            $location.path('/tasks');
        }).catch(error => {
            alert('Login failed: ' + (error.data.message || 'Invalid credentials'));
        });
    };

    $scope.register = function() {
        authService.register($scope.user).then(() => {
            alert('Registration successful! Please login.');
            $location.path('/login');
        }).catch(error => {
            const errors = error.data.errors || {};
            const errorMessage = Object.values(errors).join('\n');
            alert('Registration failed: ' + errorMessage);
        });
    };
}]);