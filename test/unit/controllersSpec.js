'use strict';

/* jasmine specs for controllers go here */

describe('angular trac client controllers', function() {

  // the homepage controller.
  describe('TracHomeCtrl', function() {

    // before each, load the module.
    beforeEach(module('tracHome'));
    
    // test creating model tickets,
    it('should create "tickets" model with 2 tickets', 
       inject(function($controller) {

      var scope = {};
      var ctrl = $controller('TracHomeCtrl', {$scope:scope});

      expect(scope.tickets.length).toBe(2);
    }));
  });
});
