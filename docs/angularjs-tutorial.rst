Go through the `Angularjs Tutorial`_

Get Rready
----------

We need npm_ to get started. 
We will use `cfgrepo nodejs sample`_ to have npm_ installed

Step 0: Bootstrapping
---------------------

Get the source code files for step 0 from GitHub::

  git checkout -f step-0
  git config url."https://".insteadof git://
  npm install
  bower install
  npm start

The **git config url** command will fix the connection error
to github.com.
More details could be found in file `troubleshoot.rst`_

Step 1: Static Template
-----------------------

static html experiments.
Here are the source code::

  git checkout -f step-1

Step 2: Angular Templates
-------------------------

This step will start using AngularJS template and will
also introduce the unit testing for AngularJS app.

Here are the changes in `github <https://github.com/angular/angular-phonecat/compare/step-1...step-2>`_

.. _Angularjs Tutorial: https://docs.angularjs.org/tutorial
.. _npm: https://www.npmjs.org/
.. _cfgrepo nodejs sample: https://github.com/leocornus/leocornus.buildout.cfgrepo/tree/master/sample/nodejs
.. _troubleshoot.rst: https://github.com/seanchen/angular-seed/blob/master/troubleshoot.rst
