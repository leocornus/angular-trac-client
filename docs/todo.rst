Some TODOs:

Knowledge Required
------------------

**JavaScript**

JavaScript is the very basic requirment.
Mozilla Developer Network (MDN) has a comprehensive
`JavaScript reference <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference>`_

**Selenium**

Selenium is the basic software for e2e testing.
`Elemental Selenium <http://elementalselenium.com/>`_ 
has many tips and tricks.

**node.js**

**Xvfg**

Setup Instruction for Windows user
----------------------------------

This instruction is mainly for Windows users behind a 
corporation firewall.
For regular Windows user, the set up should be straitforard.

- install node.js with npm
- install git
- proxy setting for npm, or use private npm register
- proxy setting for git
- proxy setting for bower,
- set up protocol for git, using http instead of git.
- JDK higher than 1.6.x
- might still need download Selenium Chrome and Firefox drive
  manually.

TODO: Need details intruction for install Selenium drives.

Instruction and set up for Xvfb
-------------------------------

The Xvfb is a virtual X11 server.
It is perfect for command line development and 
continuous integration testing.

- How to check Xvfb is installed or not?
- Xvfb init script
- Xvfb **DISPLAY** settings
- $ export DISPLAY=:99

Using Font Awesome icons
------------------------

`Font Awesome`_ is awesome

.. _Font Awesome: https://github.com/FortAwesome/Font-Awesome
