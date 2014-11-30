# node-shortlink [![Build Status](https://travis-ci.org/andreychizh/node-shortlink.svg?branch=master)](https://travis-ci.org/andreychizh/node-shortlink)

Simple generation, encoding and decoding short links library for [Node.js].

[node.js]: http://nodejs.org/

## What?

Short links makes it easier for users to recall and share the locations of important documents and web sites.

This library is used by default Base58 encoding and can represent numeric values with fewer characters and easy understandable view.

## Alphabet

```javascript
base58: '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ'
```

## Installation

```bash
npm install shortlink --save
```

## Usage

```javascript
var shortlink = require('shortlink');

shortlink.generate(8);         // Random string of 8 characters, e.g. 'PJWn4T42'  
shortlink.encode(8515010570);  // 'dYrDZ5'
shortlink.decode('dYrDZ5');    // 8515010570
```

## Running Tests

To run the test suite first invoke the following command within the repo, installing the development dependencies:

```bash
npm install
```

then run the tests:

```bash
npm test
```

## Package manager page

[![NPM](https://nodei.co/npm/shortlink.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/shortlink/)

Direct link to the [package]

[package]: https://npmjs.org/package/shortlink

## License

Released under the [MIT] license. Copyright (c) 2013 Andrey Chizh.

[MIT]: https://raw.github.com/andreychizh/node-shortlink/master/LICENSE.md
