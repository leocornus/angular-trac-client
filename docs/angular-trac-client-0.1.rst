Release 0.1
===========

:STATUS:
  Developing

The initial release will have a comprehensive AngularJS app ready
to fly, which will have the following main components:

- follow the typical AngularJS app skeleton...
- unit testing cases.
- e2e testing cases.
- Travis_ integration.
- json file on server side as the backend.

Sprints
-------

- Release 0.0.1, very basic static template. Some dummy tickets
  data in the global $scope, unit test cases and e2e test cases.
  This releae also had travis-ci set up for ci testing.
- Release 0.0.2, adding the simple query filter.
- Release 0.0.3, handle ordering: order by and order desc.
  Faced some challenge to get select tag's value by using protractor.
  Get around by using the text, which is fine too.
- Release 0.0.4, introduce the $http service to load testing tickets 
  from a json format file.
  The unit test cases will use simulated respnse to avoid the 
  dependence on a real server.

Dependences
-----------

- jdk need 1.7.x or higher, the selenium server depends on jdk
- Xvfg, this is only for linux command line testing...

Simple Angular App Skeleton
---------------------------

Create a simpe angular app with both unit and e2e test cases.
that's the start point.
Here are the folder layout::

  app/
    - css/
    - img/
    - js/
    - partials/
    index.html 
  test/
    - unit/
    - e2e/
    - karma.conf.js
    - protractor.conf.js
  .bowerrc
  .travis.yml
  README.rst
  bower.json
  package.json

The **app** folder has all the necessary files to deploy this package.
Very soon, we will have a easy to use script to package all files 
in one compress file for distribute.

All other folders and files are for development purpose, including:

- dependence management the file **bower.json**.
- a easy to use npm HTTP server for development and testing,
  the file **package.json**
- travis-ci integration, the file **travis.yml**
- unit and e2e test cases, the foler **test**

The AngularJS tutorial (`angular-phonecat`_) has details intructions.

Test Driven
-----------

We need get familiar to testing first, both unit and e2e testing.
The following 3 names are important:

- Karma_
- Jasmine_
- Protractor_

Protractor_ homepage has details API reference.
Karma_ id config to useing Jasmine_ as the testing framework.

.. _Bower: http://bower.io/
.. _Travis: https://travis-ci.org/
.. _angular-phonecat: https://github.com/angular/angular-phonecat
.. _Protractor: http://angular.github.io/protractor/
.. _Jasmine: https://github.com/jasmine/jasmine
.. _Karma: https://github.com/karma-runner/karma
