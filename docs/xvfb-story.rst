Xvfb Story
==========

The Xvfb_ is a virtual X11 server.
It is perfect and necessary for end to end testing if you are 
doing command line development.
It is also used by many continuous integration testing tools,
such as Travis CI.

Install and setup
-----------------

Most linux distribution shipped with Xvfb_.
Just simply install the package, here is a sample using yum::

  $ sudo yum install xorg-x11-server-Xvfb

Once installed, we could start there server like following::

  $ sudo Xvfb :99 -screen 0 1024x768x24 &

Before exectue the end to end test cases, we need set up 
the **DISPLAY** like following::

  $ export DISPLAY=:99

Example of start stop script, normally in file **/etc/init.d/Xvfb**::

  #! /bin/sh
  
  ### BEGIN INIT INFO
  # Provides: Xvfb
  # Required-Start: $local_fs $remote_fs
  # Required-Stop:
  # X-Start-Before:
  # Default-Start: 2 3 4 5
  # Default-Stop:
  ### END INIT INFO
  
  N=/etc/init.d/Xvfb
  
  set -e
  
  case "$1" in
    start)
  Xvfb :99 -screen 0 1024x768x24 &
  ;;
    stop|reload|restart|force-reload)
  ;;
    *)  
  echo "Usage: $N {start|stop|restart|force-reload}" >&2exit 1
  ;;
  esac
  
  exit 0

.. _Xvfb: https://en.wikipedia.org/wiki/Xvfb
