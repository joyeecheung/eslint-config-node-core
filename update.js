#!/usr/bin/env node

if (!process.argv[2]) {
  console.error('Usage: update.js path/to/node/project');
  process.exit(1);
}

const pluginRules = require('@joyeecheung/eslint-plugin-node-core').rules;
const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');
const NODE_DIR = process.argv[2];

function processConig(file) {
  const config = yaml.safeLoad(file);
  const configRules = Object.keys(config.rules);
  for (const key of configRules) {
    if (pluginRules[key]) {
      const value = config.rules[key];
      delete config.rules[key];
      config.rules[`@joyeecheung/node-core/${key}`] = value;
    }
  }
  return config;
}

// Generate base config
const baseConfigFile = fs.readFileSync(
  path.join(NODE_DIR, '.eslintrc.yaml'), 'utf8');
const baseConfig = processConig(baseConfigFile);
baseConfig.plugins =
  ['@joyeecheung/eslint-plugin-node-core'].concat(baseConfig.plugins);
fs.writeFileSync('base.json', JSON.stringify(baseConfig, null, 2));

// Generate lib config
const libConfigFile = fs.readFileSync(
  path.join(NODE_DIR, 'lib', '.eslintrc.yaml'), 'utf8');
const libConfig = processConig(libConfigFile);
fs.writeFileSync('lib.json', JSON.stringify(libConfig, null, 2));
