(function() {
    'use strict';

    var alphabetList = {
        base52: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
        base58: '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ',
        base64: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    };

    var alphabet = alphabetList.base58,
        alphabetLength = alphabet.length;

    /**
     * Generate random string from alphabet
     *
     * @param {Number} count Number of characters
     * @param {String} alphabet
     * @return {String}
     */
    var generate = function(count, alphabet) {
        var result = '',
            count = parseInt(count, 10) || 5;

        for (var i = 0; i < count; i++) {
            var index = Math.floor(Math.random() * alphabetLength);
            if (index === 0 && i === 0) {index = 1;}
            result += alphabet[index];
        }

        return result;
    };

    /**
     * Encode number to string
     *
     * @param {Number} num
     * @param {String} alphabet
     * @return {String}
     */
    var encode = function (num, alphabet) {
        var encode = '';

        num = parseInt(num, 10);

        while (num >= alphabetLength) {
            var mod = num % alphabetLength;
            encode = alphabet[mod] + encode;
            num = parseInt(num / alphabetLength, 10);
        }

        if (num) {
            encode = alphabet[num] + encode;
        }

        return encode;
    };

    /**
     * Decode string to number
     *
     * @param {String} str
     * @param {String} alphabet
     * @return {Number}
     */
    var decode = function(str, alphabet) {
        var decode = 0,
            multi = 1;

        for (var i = str.length - 1; i >= 0; i--) {
            decode = decode + multi * alphabet.indexOf(str[i]);
            multi = multi * alphabetLength;
        }

        return decode;
    };

    /**
     * Set alphabet: from alphabetList by name or custom string
     *
     * @param {String} alpha
     * @return {Object}
     */
    exports.set = function(alpha) {
        if (alpha && alphabetList.hasOwnProperty(alpha)) {
            alphabet = alphabetList[alpha];
        } else if (alpha && typeof alpha === 'string' && alpha.length > 10) {
            alphabet = alpha;
        }
        alphabetLength = alphabet.length;

        return this;
    };


    /////////// Public Methods ///////////

    exports.generate = function(count) {
        return generate(count, alphabet);
    };

    exports.encode = function(num) {
        return encode(num, alphabet);
    };

    exports.decode = function(str) {
        return decode(str, alphabet);
    };

})();

