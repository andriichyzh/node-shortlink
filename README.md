# node-shortlink [![Build Status](https://travis-ci.org/AndreyChizh/node-shortlink.png?branch=master)](https://travis-ci.org/AndreyChizh/node-shortlink)

Simple generation, encoding and decoding short links library for [Node.js].

[node.js]: http://nodejs.org/

## What?

Base58 encoding can represent numeric values with fewer characters. This is useful for short URLs.

For example `8515010570` becomes `dYrDZ5` when Base58 encoded and this on Flickr short URL is: `http://flic.kr/p/dYrDZ5`

## Installation

    npm install shortlink

## API

    generate

## Usage

```javascript
var shortlink = require('shortlink');

shortlink.generate(8); // Random string of 8 characters, for example 'PJWn4T42'  
shortlink.encode(8515010570); // 'dYrDZ5'
shortlink.decode('dYrDZ5');   // 8515010570
```

## Run tests

    make test

## Package manager page

See [npm]

[npm]: https://npmjs.org/package/shortlink

## License

Released under the MIT license. Copyright (c) 2013 Andrey Chizh.
