Some TODOs:

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
- might still need download Seleium Chrome and Firefox drive
  manually.

Instruction and set up for Xvfb
-------------------------------

The Xvfb is a virtual X11 server.
It is perfect for command line development and 
continuous integration testing.

- How to check Xvfb is installed or not?
- Xvfb init script
- Xvfb **DISPLAY** settings
- $ export DISPLAY=:99
