'use strict';

/**
 * App Module 
 * we will load angular modules here and control the app routings.
 */

// load angular modules, 
// this will replace the code in controller.js
var tracHome = angular.module('tracHome', [
  // list modules here,
  'ngRoute',
  'tracHomeControllers'
]);

// definthe application routings...
tracHome.config(['$routeProvider', 
  function($routeProvider) {
    $routeProvider.
      when('/tickets', {
        templateUrl: 'partials/tickets-list.html',
        controller: 'TracHomeCtrl'
      }).
      // whatever after the /ticket/ in url will become
      // a routeParam
      when('/ticket/:ticketId', {
        templateUrl: 'partials/ticket-detail.html',
        controller: 'TicketDetailCtrl'
      }).
      otherwise({
        redirectTo: '/tickets'
      });
  }
]);
