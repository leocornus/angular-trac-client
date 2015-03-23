'use strict';

/**
 * define the trac homepage controllers module.
 */
var tracHomeControllers = angular.module('tracHomeControllers', []);

/**
 * now here is the trac home controller, which will
 * load data and set some default value for now.
 */
tracHomeControllers.controller('TracHomeCtrl', 
    ['$scope', '$http', 
     function($scope, $http) {

       $http.get('tickets/tickets.json').success(function(data) {
         // set the testing data to $scope.
         $scope.tickets = data;
       });
     
       // set the default sort by...
       $scope.orderProp = 'id';
     }
    ]
);

/**
 * define the ticket details controller here.
 */
tracHomeControllers.controller('TicketDetailCtrl',
    ['$scope', '$routeParams',
     function($scope, $routeParams) {
       // set up the ticket id as parameter.
       $scope.ticketId = $routeParams.ticketId;
     }
    ]
);
