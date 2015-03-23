'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

// describe is the syntax from Jasmine framework,
describe('my app', function() {

  beforeEach(function() {
    // browser is a global created by Protractor.
    browser.get('index.html');
  });

  /* testing some content of the page */
  // it is the syntax from Jasmine framework.
  it("try to get some content of the homepage", function() {
    // expect title to be...
    expect(browser.getTitle()).toMatch("Angular Trac Client");

    // now let's find the first p tag.
    expect(element(by.tagName('p')).getText()).
      toMatch("Nothing here yet!");

    // now testing the simple model.
    var name = element(by.model('name'));
    // the value before sendKeys.
    expect(element(by.id('hello')).getText()).
      toMatch('Hello !');
    // this will simulate the keyboard typing.
    name.sendKeys("a name");
    expect(element(by.id('hello')).getText()).
      toBe('Hello a name!');
  });

  // try testing the ng-repeat.
  it("try to verify the list of tickets", function() {
    // find all li elements.
    element.all(by.tagName('li')).then(function(items) {
      expect(items.length).toBe(4);
    });
  });

  // testing the filter function.
  it("filter the ticket list by keyboard typing", function() {

    // protractor locator could find ng-repeat.
    var tList = element.all(by.repeater('ticket in tickets'));
    // locator by ng-model, this is input tag.
    var query = element(by.model('query'));
    // using the count method, which is definded in 
    // element.all as a method.
    expect(tList.count()).toBe(4);

    // simulate keyboard typing on query field.
    query.sendKeys('123');
    expect(tList.count()).toBe(1);

    query.clear();
    query.sendKeys('45');
    expect(tList.count()).toBe(2);

    query.clear();
    query.sendKeys('123456');
    expect(tList.count()).toBe(0);
  });

  // Testing the order function.
  it('order the tickets list by order dropdown', function() {

    // get tickets' id list.
    // the column is defined only for repeater locator.
    var idList = element.all(by.repeater('ticket in tickets')
                             .column('ticket.id'));
    // get the order by model.
    // this should be html select tag. how we handle this?
    var orderBy = element(by.model('orderProp')).$('option:checked');
    // this is the default order.
    expect(orderBy.getText()).toBe('ID');
    // Q?: How could I get the value of the selected option?

    // utility function to get all ids.
    function getIds() {
      return idList.map(function(elm) {
        return elm.getText();
      });
    }

    // the default sort
    expect(getIds()).toEqual([
      '1234', '1344', '2345', '4567'
    ]);

    // simulate the drop down click the sort by summary.
    element(by.model('orderProp')).$('option[value="summary"]')
      .click();
    expect(getIds()).toEqual([
      '1344', '1234', '4567', '2345'
    ]);
    
    // simulate click ID Desc option.
    // sort by id desc.
    element(by.model('orderProp')).$('option[value="-id"]').click();
    expect(getIds()).toEqual([
      '4567', '2345', '1344', '1234'
    ]);

    // simulate click on Summary option, sort desc.
    element(by.model('orderProp')).$('option[value="-summary"]')
            .click();
    expect(getIds()).toEqual([
      '2345', '4567', '1234', '1344'
    ]);
  });

  // testing the ticket links.
  it('should render ticket specific links', function() {
    // setup the case here, find a ticket for testing.
    var query = element(by.model('query'));
    query.sendKeys('1234');
    // click the first link on the tickets list,
    // it should only have one.
    element.all(by.css('.tickets li span a')).first().click();
    // try to verify the url to a specific ticket.
    browser.getLocationAbsUrl().then(function(url) {
      // expect the vlaue after # will be /ticket/1234
      expect(url.split('#')[1]).toBe('/ticket/1234');
    });
  });
});
