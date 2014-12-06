
'use strict';

function ShortLink() {
    this.alphabet = '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ';
}

/**
 * Generate random string from alphabet
 * @param {Number} count Number of characters
 * @return {String}
 */
ShortLink.prototype.generate = function(count) {
    var result = '',
        length = this.alphabet.length;

    count = parseInt(count, 10) || 5;

    for (var i = 0; i < count; i++) {
        var index = Math.floor(Math.random() * length);
        index = (index === 0 && i === 0) ? 1 : index;
        result += this.alphabet[index];
    }

    return result;
};

/**
 * Encode number to string
 * @param {Number} num
 * @return {String}
 */
ShortLink.prototype.encode = function(num) {
    var encode = '',
        length = this.alphabet.length;

    num = parseInt(num, 10);

    while (num >= length) {
        var mod = num % length;
        encode = this.alphabet[mod] + encode;
        num = parseInt(num / length, 10);
    }

    if (num) {
        encode = this.alphabet[num] + encode;
    }

    return encode;
};

/**
 * Decode string to number
 * @param {String} str
 * @return {Number}
 */
ShortLink.prototype.decode = function(str) {
    var length = this.alphabet.length,
        decode = 0,
        multi = 1;

    for (var i = str.length - 1; i >= 0; i--) {
        decode += multi * this.alphabet.indexOf(str[i]);
        multi = multi * length;
    }

    return decode;
};

module.exports = new ShortLink();