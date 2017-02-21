#!/bin/sh
rm -r ./node_modules
echo 'trashed old node_modules'
rm -r ./client/bower_components
echo 'trashed old bower_components'
find ./client -type f -name '*.js' -exec rm -f {} \;
find ./client -type f -name '*.js.map' -exec rm -f {} \;
echo 'trashed old compiled .js and .js.map files'
