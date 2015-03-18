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
tracHome.controller('TracHomeCtrl', function($scope) {

  // we will start with a simple list of dummy data.
  $scope.tickets = [
    {'id': 2345,
     'summary': 'The ticket about use a ticket'
    },
    {'id': 1234,
     'summary': 'The ticket about create a ticket'
    },
    {'id': 4567,
     'summary': 'The ticket about update a ticket'
    }
  ];

  // set the default sort by...
  $scope.orderProp = 'id';
});
