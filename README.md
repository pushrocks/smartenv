# smartenv
store things about your environment and let them travel across modules

## Availabililty
[![npm](https://push.rocks/assets/repo-button-npm.svg)](https://www.npmjs.com/package/smartenv)
[![git](https://push.rocks/assets/repo-button-git.svg)](https://gitlab.com/pushrocks/smartenv)
[![git](https://push.rocks/assets/repo-button-mirror.svg)](https://github.com/pushrocks/smartenv)
[![docs](https://push.rocks/assets/repo-button-docs.svg)](https://pushrocks.gitlab.io/smartenv/)

## Status for master
[![build status](https://gitlab.com/pushrocks/smartenv/badges/master/build.svg)](https://gitlab.com/pushrocks/smartenv/commits/master)
[![coverage report](https://gitlab.com/pushrocks/smartenv/badges/master/coverage.svg)](https://gitlab.com/pushrocks/smartenv/commits/master)
[![Dependency Status](https://david-dm.org/pushrocks/smartenv.svg)](https://david-dm.org/pushrocks/smartenv)
[![bitHound Dependencies](https://www.bithound.io/github/pushrocks/smartenv/badges/dependencies.svg)](https://www.bithound.io/github/pushrocks/smartenv/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/pushrocks/smartenv/badges/code.svg)](https://www.bithound.io/github/pushrocks/smartenv)
[![TypeScript](https://img.shields.io/badge/TypeScript-2.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%206.x.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Install
Install the package through npm

```
npm install smartenv --save
```

## Usage

```javascript
var smartenv = require("smartenv");

smartenv.info(); //prints an output about your current environment and registered objects
smartenv.register({akey:"a text"},"somevalue"); // register a new object
smartenv.makeGlobal() // make smartenv available from gobal.smartenv
smartenv.get("somevalue").akey; // returns "a text"
smartenv.items.somevalue.akey; // also returns "a text"
```

[![npm](https://push.rocks/assets/repo-header.svg)](https://push.rocks)
