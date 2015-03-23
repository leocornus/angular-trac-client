'use strict';

/**
 * testing the ticket details view.
 */

describe('ticket dtails view', function() {

  beforeEach(function() {
    // visit the url to a ticket.
    browser.get('index.html#/ticket/1234');
  });

  it('should display a page with ticketId', function() {
    // expect the ticketId has the value from URL.
    expect(element(by.binding('ticketId')).getText()).toBe('1234');
  });
});
