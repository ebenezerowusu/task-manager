app.service('AuthService', function($http) {
    var apiUrl = "http://localhost:8001/api";

    this.register = function(user) {
        return $http.post(apiUrl + "/register", user);
    };

    this.login = function(credentials) {
        return $http.post(apiUrl + "/login", credentials);
    };

    this.logout = function() {
        return $http.post(apiUrl + "/logout", {}, {
            headers: { Authorization: "Bearer " + localStorage.getItem("token") }
        });
    };

    this.isAuthenticated = function() {
        return !!localStorage.getItem("token");
    };
});
