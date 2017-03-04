angular.module('shortly.links', ['shortly.services'])
.controller('LinksController', function LinksController($scope, Links, Auth, $location) {
  if (!Auth.isAuth()) {
    $location.path('/signin');
  }
  $scope.data = {};
  Links.getAll().then(function(data) {
    $scope.data.links = data;
  }, function(result) {
    console.log('Failed to get data, results is ' + result);
  });
  $scope.signOut = function () {
    Auth.signout();
  };
});
