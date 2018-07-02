# Lint Package Lock

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

This is a small tool to help keep your package-lock sane when working with other devs who may be using different npm versions or config.

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
