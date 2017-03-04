
angular.module('shortly.shorten', ['shortly.services'])
.controller('ShortenController', function ($scope, $location, Links, Auth) {
  if (!Auth.isAuth()) {
    $location.path('/signin');
  }
  $scope.link = {};
  $scope.addLink = function (link) {
    Links.addOne(link);
  };
  $scope.signOut = function () {
    Auth.signout();
  };
});
