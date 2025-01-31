angular.module('tManagement')
.service('taskService', ['$http', 'authService', function($http, authService) {
    const apiBase = 'http://localhost:8000/api/';

    return {
        /**
         * Fetches the list of tasks from the API.
         * @returns {Promise} - A promise that resolves to the list of tasks.
         */
        getTasks: function() {
            return $http.get(apiBase + 'tasks', {
                headers: authService.getAuthHeader()
            });
        },

        /**
         * Creates a new task in the API.
         * @param {Object} task - The task to create. The task should contain the title,
         * description, priority, and deadline for the task.
         * @returns {Promise} - A promise that resolves to the created task.
         */
        createTask: function(task) {
            return $http.post(apiBase + 'tasks', task, {
                headers: authService.getAuthHeader()
            });
        },

        /**
         * Fetches a task from the API.
         * @param {number} taskId - The ID of the task to fetch.
         * @returns {Promise} - A promise that resolves to the task.
         */
        getTask: function(taskId) {
            return $http.get(apiBase + 'tasks/' + taskId, {
                headers: authService.getAuthHeader()
            });
        },

        /**
         * Updates a task in the API.
         * @param {Object} task - The task to update. The task should contain the ID
         * of the task to update, as well as any other fields to update.
         * @returns {Promise} - A promise that resolves to the updated task.
         */
        updateTask: function(task) {
            return $http.put(apiBase + 'tasks/' + task.id, task, {
                headers: authService.getAuthHeader()
            });
        },

        /**
         * Deletes a task from the API.
         * @param {number} taskId - The ID of the task to delete.
         * @returns {Promise} - A promise that resolves to the deleted task.
         */
        deleteTask: function(taskId) {
            return $http.delete(apiBase + 'tasks/' + taskId, {
                headers: authService.getAuthHeader()
            });
        },

        /**
         * Fetches the list of priorities from the API.
         * @returns {Promise} - A promise that resolves to the list of priorities.
         */
        getPriorities: function() {
            return $http.get(apiBase + 'priorities', {
                headers: authService.getAuthHeader()
            });
        },

        /**
         * Fetches the list of statuses from the API.
         * @returns {Promise} - A promise that resolves to the list of statuses.
         */
        getStatuses: function() {
            return $http.get(apiBase + 'statuses', {
                headers: authService.getAuthHeader()
            });
        }
    };
}]);