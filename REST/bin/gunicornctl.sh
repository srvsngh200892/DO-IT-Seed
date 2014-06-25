#!/bin/sh

# Specify path variable
PATH=/sbin:/usr/sbin:/bin:/usr/bin

# Kill me on all errors
set -e

case "$1" in
  start)
    /home/anurag/DO-IT-Rest/bin/gunicorn_django -D \
        -w 4 \
        -p /tmp/DOITRest.pid \
        --log-file=//tmp/DOITRest.log \
        -b 127.0.0.1:8000 \
        DOITRest.dev_settings
    ;;
  stop)
    kill `cat /tmp/DOITRest.pid`
    ;;    
  *)
    echo "Usage: $0 {start|stop}"
    exit 1
    ;;
esac
