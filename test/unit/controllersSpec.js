'use strict';

/* jasmine specs for controllers go here */

describe('angular trac client controllers', function() {

  // the homepage controller.
  describe('TracHomeCtrl', function() {

    var ticketsScope, ctrl;
    // need this to inject http service.
    var $httpBackend;

    // before each test, load the module.
    // now out app moudle has new name, which will
    // have more than one controller.
    beforeEach(module('tracHomeControllers'));

    /**
     * inject the service and controler.
     * read anularjs tutorial setp 5 for more details.
     * https://docs.angularjs.org/tutorial/step_05
     *
     * the methods module and inject are from angular-mock.js.
     *
     * As the mock $httpBackend 
     * https://docs.angularjs.org/api/ngMock/service/$httpBackend
     * explained, the unit test cases will not sedn XHR or JSONP
     * request to a real server.
     * Instead, we will make the request and similate the respose.
     */
    beforeEach(
      inject(function(_$httpBackend_, $rootScope, $controller) {
        $httpBackend = _$httpBackend_;
        // here is fake respone for unit testing.
        $httpBackend.expectGET('tickets/tickets.json').
            respond([
              {"id": 2345,
               "summary": "The ticket about use a ticket",
               "status" : "new"
              },
              {"id": 1234,
               "summary": "The ticket about create a ticket",
               "status" : "assigned"
              },
              {"id": 4567,
               "summary": "The ticket about update a ticket",
               "status" : "accepted"
              }
            ]);

        ticketsScope = $rootScope.$new();
        ctrl = $controller('TracHomeCtrl', {$scope: ticketsScope});
      }));

    
    // test creating model tickets,
    it('should create "tickets" model with 3 tickets', function() {

      expect(ticketsScope.tickets).toBeUndefined();
      $httpBackend.flush();

      // we have 3 dummy tickets for testing.
      expect(ticketsScope.tickets.length).toBe(3);

      for(var i=0; i < ticketsScope.tickets.length; i++) {
        var ticket = ticketsScope.tickets[i];
        // each ticket is a JavaScript Object, and it has 2 fields.
        var keys = Object.keys(ticket);
        expect(keys.length).toBe(3);
        // we should know the keys.
        expect(keys[0]).toMatch('id');
        expect(keys[1]).toMatch('summary');
        expect(keys[2]).toMatch('status');
      }
    });

    it('should have the default sort by id', function() {

      // check the default sorting option, should be by id.
      expect(ticketsScope.orderProp).toBe('id');
    });
  });

  // test ticket details controller.
  describe('TicketDetailCtrl', function() {

    // we will go to the controller by loading a URL like 
    // http://..../ticket/1234
  });
});
