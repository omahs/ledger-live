#!/bin/bash

yarn start > test-e2e/logs.txt &
sleep 60 &
( tail -f -n0 test-e2e/logs.txt & ) | grep -q 'info: libcore {"intVersion":'
if [ $? -eq 0 ] ; then
    echo "Libcore loaded properly - SUCCESS"
else
    echo FAIL
    exit 1
fi
sleep 5
killall -9 Electron
rm test-e2e/logs.txt
