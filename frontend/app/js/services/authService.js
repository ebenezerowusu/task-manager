angular.module('tManagement')
.service('authService', ['$http', '$location', function($http, $location) {
    const apiBase = 'http://localhost:8000/api/';
    let currentUser = null;

    return {
        /**
         * Logs in a user.
         * 
         * @param {Object} user - The user credentials.
         * @param {string} user.email - The email address of the user.
         * @param {string} user.password - The password of the user.
         * @returns {Promise} - A promise that resolves to the logged-in user.
         */
        login: function(user) {
            return $http.post(apiBase + 'login', user).then(response => {
                // Set the current user based on the response
                currentUser = response.data.user;
                // Store the authentication token in local storage
                localStorage.setItem('auth_token', response.data.token);
                // Return the current user
                return currentUser;
            });
        },
        
        /**
         * Registers a new user.
         * 
         * @param {Object} user - The new user to register.
         * @param {string} user.email - The email address of the user.
         * @param {string} user.password - The password of the user.
         * @returns {Promise} - A promise that resolves to the new user.
         */
        register: function(user) {
            return $http.post(apiBase + 'register', user);
        },

        /**
         * Logs the user out of the application.
         * 
         * @returns {void}
         */
        logout: function() {
            // Remove the auth token from local storage
            localStorage.removeItem('auth_token');
            // Set the current user to null
            currentUser = null;
            // Redirect to the login page
            $location.path('/login');
        },

        /**
         * Retrieves the current user.
         * 
         * @returns {Object|null} The current user object if logged in, otherwise null.
         */
        getCurrentUser: function() {
            return currentUser;
        },

        /**
         * Returns true if the user is logged in, false otherwise
         * 
         * @returns {Boolean} User is logged in
         */
        isLoggedIn: function() {
            return !!localStorage.getItem('auth_token');
        },

        /**
         * Returns the Authorization header with the Bearer token
         * 
         * @returns {Object} Authorization header
         */
        getAuthHeader: function() {
            return {
                'Authorization': 'Bearer ' + localStorage.getItem('auth_token'),
                'Accept': 'application/json'
            };
        }
    };
}]);