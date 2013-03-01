# node-shortlink [![Build Status](https://travis-ci.org/AndreyChizh/node-shortlink.png?branch=master)](https://travis-ci.org/AndreyChizh/node-shortlink)

Simple generation, encoding and decoding short links library for [Node.js].

[node.js]: http://nodejs.org/

## What?

Short links makes it easier for users to recall and share the locations of important documents and web sites.

This library is used by default Base58 encoding and can represent numeric values with fewer characters and easy understandable view.

## Alphabets

```
base52: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
base58: '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ' (default)
base64: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
```

## Installation

```bash
npm install shortlink
```

## Usage

```javascript
var shortlink = require('shortlink');

shortlink.generate(8); // Random string of 8 characters, for example 'PJWn4T42'  
shortlink.encode(8515010570); // 'dYrDZ5'
shortlink.decode('dYrDZ5');   // 8515010570
```

## Running Tests

To run the test suite first invoke the following command within the repo, installing the development dependencies:

```bash
npm install
```

then run the tests:

```bash
make test
```

## Package manager page

See [npm]

[npm]: https://npmjs.org/package/shortlink

## License

Released under the [MIT] license. Copyright (c) 2013 Andrey Chizh.

[MIT]: https://raw.github.com/AndreyChizh/node-shortlink/master/LICENSE.md

<script src="http://code.jquery.com/jquery-1.4.2.min.js"></script>

