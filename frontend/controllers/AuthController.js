app.controller('AuthController', function($scope, $location, AuthService) {
    $scope.user = {};
    $scope.credentials = {};

    // Register User
    $scope.register = function() {
        AuthService.register($scope.user).then(function(response) {
            alert("Registration successful! Please log in.");
            $location.path("/");
        }).catch(function(error) {
            alert("Error: " + error.data.message);
        });
    };

    // Login User
    $scope.login = function() {
        AuthService.login($scope.credentials).then(function(response) {
            localStorage.setItem("token", response.data.token);
            $location.path("/tasks");
        }).catch(function(error) {
            alert("Invalid credentials!");
        });
    };

    // Logout User
    $scope.logout = function() {
        AuthService.logout().then(function() {
            localStorage.removeItem("token");
            $location.path("/");
        });
    };
});
