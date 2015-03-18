'use strict';

/* jasmine specs for controllers go here */

describe('angular trac client controllers', function() {

  // the homepage controller.
  describe('TracHomeCtrl', function() {

    var ticketsScope, ctrl;

    // before each, load the module.
    beforeEach(module('tracHome'));
    
    // test creating model tickets,
    it('should create "tickets" model with 3 tickets', 
       inject(function($controller) {

      ticketsScope = {};
      ctrl = $controller('TracHomeCtrl', 
                             {$scope:ticketsScope});
      // we have 3 dummy tickets for testing.
      expect(ticketsScope.tickets.length).toBe(3);

      for(var i=0; i < ticketsScope.tickets.length; i++) {
        var ticket = ticketsScope.tickets[i];
        // each ticket is a JavaScript Object, and it has 2 fields.
        var keys = Object.keys(ticket);
        expect(keys.length).toBe(2);
        // we should know the keys.
        expect(keys[0]).toMatch('id');
        expect(keys[1]).toMatch('summary');
      }
    }));

    it('should have the default sort by id', function() {

      // check the default sorting option, should be by id.
      expect(ticketsScope.orderProp).toBe('id');
    });
  });
});
