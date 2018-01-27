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
const file = fs.readFileSync(
  path.join(NODE_DIR, '.eslintrc.yaml'), 'utf8');

const config = yaml.safeLoad(file);
const configRules = Object.keys(config.rules);
for (const key of configRules) {
  if (pluginRules[key]) {
    const value = config.rules[key];
    delete config.rules[key];
    config.rules[`@joyeecheung/node-core/${key}`] = value;
  }
}

config.plugins =
  ['@joyeecheung/eslint-plugin-node-core'].concat(config.plugins);

fs.writeFileSync('eslintrc.json', JSON.stringify(config, null, 2));
