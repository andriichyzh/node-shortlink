# Shortlink [![Build Status](https://travis-ci.org/AndreyChizh/node-shortlink.png?branch=master)](https://travis-ci.org/AndreyChizh/node-shortlink)

Simple generation, encoding and decoding short links library for [Node.js].

[node.js]: http://nodejs.org/

## What?

Base58 allows you to represent a numeric value with fewer characters, useful
for short URLs among other things. Flickr is one the biggest sites that makes
use of it for short photo URLs.

For example `6857269519` becomes `brXijP` when Base58 encoded, and hence the
Flickr short URL is: `http://flic.kr/p/brXijP`

## Installation

    npm install base58

## Usage

```javascript
var Base58 = require('base58');
Base58.encode(6857269519); // 'brXijP'
Base58.decode('brXijP');   // 6857269519
```

## License

Released under the MIT license. Copyright (c) 2013 Andrey Chizh.
