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
    // this will simulate the keyboard typing.
    name.sendKeys("a name");
    expect(element(by.id('hello')).getText()).
      toBe('Hello a name!');
  });

  // try testing the ng-repeat.
  it("try to verify the list of tickets", function() {
    // find all li elements.
    element.all(by.tagName('li')).then(function(items) {
      expect(items.length).toBe(2);
    });
  });
});
