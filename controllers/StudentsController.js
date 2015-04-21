//create first controller and populare some date to have students to list
//calling the method on studentRoster app, creates a controller
//function holds the controller's logic
studentRoster.controller('StudentsCtrl', function StudentsCtrl($scope, StudentsFactory) {
    $scope.students = StudentsFactory.students;
    $scope.StudentsFactory = StudentsFactory;
});
