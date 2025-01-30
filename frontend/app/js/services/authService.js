angular.module('taskManagerApp')
.service('authService', ['$http', '$location', function($http, $location) {
    const apiBase = 'http://localhost:8000/api/';
    let currentUser = null;

    return {
        login: function(user) {
            return $http.post(apiBase + 'login', user).then(response => {
                currentUser = response.data.user;
                localStorage.setItem('auth_token', response.data.token);
                return currentUser;
            });
        },
        
        register: function(user) {
            return $http.post(apiBase + 'register', user);
        },

        logout: function() {
            localStorage.removeItem('auth_token');
            currentUser = null;
            $location.path('/login');
        },

        getCurrentUser: function() {
            return currentUser;
        },

        isLoggedIn: function() {
            return !!localStorage.getItem('auth_token');
        },

        // Add authorization header to requests
        getAuthHeader: function() {
            return {
                'Authorization': 'Bearer ' + localStorage.getItem('auth_token'),
                'Accept': 'application/json'
            };
        }
    };
}]);