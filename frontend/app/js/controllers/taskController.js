angular.module('taskManagerApp')
.controller('TaskController', ['$scope', '$routeParams', 'taskService', 'authService', '$location',
function($scope, $routeParams, taskService, authService, $location) {
    $scope.tasks = [];
    $scope.filters = {};
    $scope.newTask = {};
    
    // Initialize
    taskService.getTasks().then(response => {
        if($routeParams.id) {
            taskService.getTask($routeParams.id).then(response => {
                $scope.newTask = response.data.data;
                // Convert date to input format
                $scope.newTask.deadline = new Date($scope.newTask.deadline).toISOString().split('T')[0];
            });
        }

        $scope.tasks = response.data.data;
    });

    // Get priorities and statuses from backend
    taskService.getPriorities().then(response => {
        $scope.priorities = response.data.data;
    });
    
    taskService.getStatuses().then(response => {
        $scope.statuses = response.data.data;
    });

    $scope.goToEditTask = function(id) {
        $location.path('/tasks/' + id + '/edit');
    };

    // Task Actions
    $scope.createTask = function () {
        const deadline = new Date($scope.newTask.deadline);
        $scope.newTask.deadline = deadline.toISOString().split('T')[0];
        
        taskService.createTask($scope.newTask).then(() => {
            $location.path('/tasks');
            $scope.newTask = {};
        }).catch(error => {
            alert('Error creating task: ' + error.data.message);
        });
    };

    $scope.updateTask = function(task) {
        taskService.updateTask(task).catch(error => {
            alert('Error updating task: ' + error.data.message);
        });
    };

    $scope.deleteTask = function(taskId) {
        if(confirm('Are you sure you want to delete this task?')) {
            taskService.deleteTask(taskId).then(() => {
                $scope.tasks = $scope.tasks.filter(t => t.id !== taskId);
            }).catch(error => {
                alert('Error deleting task: ' + error.data.message);
            });
        }
    };

    $scope.logout = function() {
        authService.logout();
    };
}]);