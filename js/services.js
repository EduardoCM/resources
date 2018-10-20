angular.module('app.services', []).factory('Alumno', function($resource) {
  return $resource('/api/v1/alumnos/:id', { id: '@id' }, {
    update: {
      method: 'PUT'
    }
  });
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});
