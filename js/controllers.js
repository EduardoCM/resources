angular.module('app.controllers', []).controller('AlumnoListController', function($scope, $state, popupService, $window, Alumno) {
  $scope.alumnos = Alumno.query(); 

  $scope.deleteAlumno = function(alumno) { 
    if (popupService.showPopup('Really delete this?')) {
      alumno.$delete(function() {
        $scope.alumno = Alumno.query(); 
        $state.go('alumnos');
      });
    }
  };
}).controller('AlumnoViewController', function($scope, $stateParams, Alumno) {
  $scope.alumno = Alumno.get({ id: $stateParams.id }); 
}).controller('AlumnoCreateController', function($scope, $state, $stateParams, Alumno) {
  $scope.alumno = new Alumno();  

  $scope.addAlumno = function() { 
    $scope.alumno.$save(function() {
      $state.go('alumnos'); 
    });
  };
}).controller('AlumnoEditController', function($scope, $state, $stateParams, Alumno) {
  $scope.updateAlumno = function() { 
    $scope.alumno.$update(function() {
      $state.go('alumnos'); 
    });
  };

  $scope.loadAlumno = function() { 
    $scope.alumno = Alumno.get({ id: $stateParams.id });
  };

  $scope.loadAlumno(); 
});
