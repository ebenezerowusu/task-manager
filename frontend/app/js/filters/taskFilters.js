angular.module('taskManagerApp')
.filter('taskFilter', function() {
    return function(tasks, filters) {
        return tasks.filter(task => {
            return (!filters.status || task.status === filters.status) &&
                   (!filters.priority || task.priority === filters.priority) &&
                   (!filters.deadline || new Date(task.deadline) <= new Date(filters.deadline));
        });
    };
});