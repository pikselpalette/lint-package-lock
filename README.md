# Lint Package Lock

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

This is a tool to keep your package-lock sane when working with multiple devs who may be using different npm versions or `.npmrc` files.

## Installation

```
npm i --save-dev lint-package-lock
```

## Usage

It is configured using the JSON file `.lint-package-lock` in your home folder, details of which are in the `Rules` section of the readme.

Add it to your packages scripts to use it:

```JSON
{
  "scripts": {
    "lint:package-lock": "node node_modules/lint-package-lock"
  }
}
```

## Rules

### Server

Enforces the resolves server to use, defaults to `https://registry.npmjs.org`

*Example:*

```json
{
  "server": "https://your-private-registry.internal"
}
```

## Arguments

### --file=package-lock.json

Sets the file to lint, defaults to `package-lock.json` in the current working directory.

### --config=.lint-package-lock

Sets the config file, defaults to `.lint-package-lock` in the current working directory.
