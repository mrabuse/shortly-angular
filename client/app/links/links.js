angular.module('shortly.links', ['shortly.services'])
.controller('LinksController', function LinksController($scope, Links) {
  $scope.data = {};
  Links.getAll().then(function(data) {
    $scope.data.links = data;
  }, function(result) {
    console.log('Failed to get data, results is ' + result);
  });
});
