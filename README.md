# eslint-plugin-node-core

Sharable ESLint configurations following the style guide of Node.js core.

Original source code comes from
[the nodejs/node repo](https://github.com/nodejs/node/tree/master/.eslintrc.yaml).

Depends on [@joyeecheung/eslint-plugin-node-core](https://github.com/joyeecheung/eslint-plugin-node-core).

## Update

This project is generated with [update.js](./update.js).

```bash
git clone git@github.com:joyeecheung/eslint-config-node-core.git
cd eslint-config-node-core.git
npm install
# Generates base.json and lib.json
./update.js /path/to/node/project
```

## Usage

See [examples](./examples).

1. Install the peer dependencies

    ```
    npm install --save-dev eslint eslint-plugin-markdown babel-eslint @joyeecheung/eslint-plugin-node-core
    ```
2. In your `.eslintrc.json` (or `.eslintrc.yaml`, then you would need to use the yaml syntax for the configurations).

    ```json
    {
      "extends": "@joyeecheung/eslint-config-node-core"
    }
    ```

    Or if you want to use the styles of the [lib/](https://github.com/nodejs/node/tree/master/lib) directory in Node.js core:

    ```json
    {
      "extends": "@joyeecheung/eslint-config-node-core/lib"
    }
    ```