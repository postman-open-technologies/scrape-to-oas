#!/usr/bin/env node

'use strict';

const fs = require('fs');
const validator = require('oas-validator');
const yaml = require('yaml');

async function main(o) {
  try {
    await validator.validate(o,{});
    console.log(process.argv[2],'valid');
  }
  catch (ex) {
    console.warn(ex.message);
    process.exit(1);
  }
}

if (process.argv[2]) {
  const s = fs.readFileSync(process.argv[2],'utf8');
  const o = yaml.parse(s);
  main(o);
}

