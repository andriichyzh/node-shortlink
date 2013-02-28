# node-shortlink [![Build Status](https://travis-ci.org/AndreyChizh/node-shortlink.png?branch=master)](https://travis-ci.org/AndreyChizh/node-shortlink)

Simple generation, encoding and decoding short links library for [Node.js].

[node.js]: http://nodejs.org/

## What?

Base58 encoding can represent numeric values with fewer characters.

This concept was introduced to the general public by Flickr, which uses the following String:

`123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ`

For example `8515010570` becomes `dYrDZ5` when Base58 encoded and this on Flickr short URL is: `http://flic.kr/p/dYrDZ5`

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

## Run tests

```bash
make test
```

## Package manager page

See [npm]

[npm]: https://npmjs.org/package/shortlink

## License

Released under the [MIT] license. Copyright (c) 2013 Andrey Chizh.

[MIT]: https://raw.github.com/AndreyChizh/node-shortlink/master/LICENSE.md
