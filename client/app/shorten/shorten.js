
angular.module('shortly.shorten', ['shortly.services'])
.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.addLink = function (link) {
    Links.addOne(link);
  };
});
