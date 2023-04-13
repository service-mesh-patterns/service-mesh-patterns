#! /usr/bin/env bash

# Script for Deploy preview workflow

if [ -f public-dir.zip ]; then
    rm -rf public-dir.zip
fi
zip -r public-dir.zip ./site/public