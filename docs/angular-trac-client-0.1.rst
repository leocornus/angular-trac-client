Release 0.1
===========

The initial release will have a comprehensive AngularJS app ready
to fly, which will have the following main components:

- follow the typical AngularJS app skeleton...
- unit testing.
- e2e testing.
- Travis_ integration.
- Bower_ integration

Simple Angular App with travis-ci
---------------------------------

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
    - protractor-conf.js
  .travis.yml
  README.rst
  bower.json
  package.json

.. _Bower: http://bower.io/
.. _Travis: https://travis-ci.org/
.. _angular-phonecat: https://github.com/angular/angular-phonecat
