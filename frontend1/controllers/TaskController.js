app.controller('TaskController', function($scope, $routeParams, $location, TaskService) {
    $scope.tasks = [];

    // Fetch all tasks
    TaskService.getTasks().then(function(response) {
        $scope.tasks = response.data;
    });

    // Fetch single task for editing
    if ($routeParams.id) {
        TaskService.getTask($routeParams.id).then(function(response) {
            $scope.task = response.data;
        });
    }

    // Create or Update Task
    $scope.saveTask = function() {
        if ($scope.task.id) {
            TaskService.updateTask($scope.task.id, $scope.task).then(function() {
                $location.path("/");
            });
        } else {
            TaskService.createTask($scope.task).then(function() {
                $location.path("/");
            });
        }
    };

    // Delete Task
    $scope.deleteTask = function(id) {
        TaskService.deleteTask(id).then(function() {
            $scope.tasks = $scope.tasks.filter(task => task.id !== id);
        });
    };
});
