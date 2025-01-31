angular.module('tManagement')
.controller('AuthController', ['$scope', 'authService', '$location', 
function($scope, authService, $location) {
    $scope.user = {};
    
    /**
     * Logs in the user with the specified credentials.
     * If the login is successful, redirects the user to the tasks page.
     * If the login fails, displays an error message.
     */
    $scope.login = function() {
        authService.login($scope.user).then(() => {
            $location.path('/tasks');
        }).catch(error => {
            const errorMessage = error.data.message || 'Invalid credentials';
            alert('Login failed: ' + errorMessage);
        });
    };

    /**
     * Registers a new user with the specified credentials.
     * If the registration is successful, alerts the user that the registration was
     * successful and redirects the user to the login page.
     * If the registration fails, displays an error message with the validation
     * errors.
     */
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