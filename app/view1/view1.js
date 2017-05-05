'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', 'notify', function($scope, notify) {
  $scope.greeting = 'hello!';
  $scope.double = function (value) {
    return value * 2;
  };
  $scope.callNotify = function (msg) {
      notify(msg);
  }

}])
.factory('notify', ['$window', function (win) {
    var msgs = [];
    return function (msg) {
        msgs.push(msg);
        if (msgs.length === 3) {
          win.alert(msgs.join('\n'));
          msgs = [];
        }
    }
}]);
