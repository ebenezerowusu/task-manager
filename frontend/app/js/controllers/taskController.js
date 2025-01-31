angular.module('tManagement')
.controller('TaskController', ['$scope', '$routeParams', 'taskService', 'authService', '$location',
function($scope, $routeParams, taskService, authService, $location) {
    $scope.tasks = [];
    $scope.filters = {};
    $scope.newTask = {};
    
    taskService.getTasks().then(response => {
        if($routeParams.id) {
            taskService.getTask($routeParams.id).then(response => {
                $scope.newTask = response.data.data;
                
                $scope.newTask.deadline = new Date($scope.newTask.deadline).toISOString().split('T')[0];
            });
        }

        $scope.tasks = response.data.data;
    });

    taskService.getPriorities().then(response => {
        $scope.priorities = response.data.data;
    });
    
    taskService.getStatuses().then(response => {
        $scope.statuses = response.data.data;
    });

    /**
     * Redirects to the edit page for the task with the given id.
     * @param {number} id - The id of the task to edit.
     */
    $scope.goToEditTask = function(id) {
        $location.path('/tasks/' + id + '/edit');
    };


    /**
     * Creates a new task.
     * @param {Object} task - The task to create. The task should contain the title,
     * description, priority, and deadline for the task.
     */
    $scope.createTask = function () {
        // Format the deadline by removing the time component
        const deadline = new Date($scope.newTask.deadline);
        $scope.newTask.deadline = deadline.toISOString().split('T')[0];
        
        // Call the taskService to create the task
        taskService.createTask($scope.newTask).then(() => {
            // On success, redirect the user to the tasks page
            $location.path('/tasks');
            // Reset the newTask object
            $scope.newTask = {};
        }).catch(error => {
            // On error, show the error message
            alert('Error creating task: ' + error.data.message);
        });
    };

    /**
     * Updates an existing task.
     * @param {Object} task - The task object containing updated details.
     */
    $scope.updateTask = function (task) {
        // Create a copy of the task to avoid modifying the original object
        const formattedTask = angular.copy(task);
        
        // Format the deadline to remove the time component
        formattedTask.deadline = new Date(formattedTask.deadline).toISOString().split('T')[0];
        
        // Call the taskService to update the task
        taskService.updateTask(formattedTask).then(() => {
            // On success, redirect the user to the tasks page
            $location.path('/tasks');
            alert('Update Successful');
        }).catch(error => {
            // On error, show the error message
            alert('Error updating task: ' + error.data.message);
        });
    };

    /**
     * Deletes a task after confirming with the user.
     * @param {number} taskId - The ID of the task to delete.
     */
    $scope.deleteTask = function(taskId) {
        // Confirm with the user before deleting the task
        if(confirm('Are you sure you want to delete this task?')) {
            // Call the taskService to delete the task
            taskService.deleteTask(taskId).then(() => {
                // On success, remove the task from the local tasks array
                $scope.tasks = $scope.tasks.filter(t => t.id !== taskId);
            }).catch(error => {
                // On error, show the error message
                alert('Error deleting task: ' + error.data.message);
            });
        }
    };

    /**
     * Logs the user out of the application and redirects them to the login page.
     */
    $scope.logout = function() {
        authService.logout();
    };
}]);