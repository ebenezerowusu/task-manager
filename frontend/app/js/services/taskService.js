angular.module('taskManagerApp')
.service('taskService', ['$http', 'authService', function($http, authService) {
    const apiBase = 'http://localhost:8000/api/';

    return {
        getTasks: function() {
            return $http.get(apiBase + 'tasks', {
                headers: authService.getAuthHeader()
            });
        },

        createTask: function(task) {
            return $http.post(apiBase + 'tasks', task, {
                headers: authService.getAuthHeader()
            });
        },

        getTask: function(taskId) {
            return $http.get(apiBase + 'tasks/' + taskId, {
                headers: authService.getAuthHeader()
            });
        },

        updateTask: function(task) {
            return $http.put(apiBase + 'tasks/' + task.id, task, {
                headers: authService.getAuthHeader()
            });
        },

        deleteTask: function(taskId) {
            return $http.delete(apiBase + 'tasks/' + taskId, {
                headers: authService.getAuthHeader()
            });
        },

        getPriorities: function() {
            return $http.get(apiBase + 'priorities', {
                headers: authService.getAuthHeader()
            });
        },

        getStatuses: function() {
            return $http.get(apiBase + 'statuses', {
                headers: authService.getAuthHeader()
            });
        }
    };
}]);