#!/bin/bash

# change all absolute paths to relative paths
for f in $(find ./dist -type f); do
  sed -i 's|/BASEPATH|.|g' $f
done

# fix paths in css
# relative url imports in css files are relative
# to that css file not the current url
for f in $(find ./dist -type f -name "*.css"); do
  sed -i 's|./_next/static/media/|../media/|g' $f
done

# remove pointless file
rm ./dist/index.txt",
