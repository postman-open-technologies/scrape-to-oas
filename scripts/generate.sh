#!/bin/sh
export name=$1
node index.js --config ./config/$name.js --output ./output/$name.openapi.yaml --verbose
node validate ./output/$name.openapi.yaml

