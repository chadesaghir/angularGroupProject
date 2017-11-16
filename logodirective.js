var app = angular.module('tacoCat');
app.directive('logo', function(){
  return {
    restrict: 'E',
    replace: false,
    template: '<img src="topbar.png">'
  }
});