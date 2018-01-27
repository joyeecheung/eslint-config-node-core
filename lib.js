'use strict';

const fs = require('fs');
const path = require('path');

const libConfig = require('./lib.json');
if (libConfig.extends) {
  libConfig.extends = [
    '@joyeecheung/eslint-config-node-core'
  ].concat(libConfig.extends);
} else {
  libConfig.extends = [
    '@joyeecheung/eslint-config-node-core'
  ];
}

module.exports = libConfig;
