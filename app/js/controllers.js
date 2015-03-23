'use strict';

/**
 * the homepage angular module.
 * we need a module to add controller
 */
var tracHome = angular.module('tracHome', []);

/**
 * define the trac homepage controller with only $scope
 * directive now.
 */
tracHome.controller('TracHomeCtrl', 
                    ['$scope', '$http', function($scope, $http) {

  $http.get('tickets/tickets.json').success(function(data) {
    // set the testing data to $scope.
    $scope.tickets = data;
  });

  // set the default sort by...
  $scope.orderProp = 'id';
}]);
