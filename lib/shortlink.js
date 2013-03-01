(function() {
    'use strict';

    var alphabetList = {
        base52: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
        base58: '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ'
    };

    var alphabet = alphabetList.base58;

    var generate = function(count, alphabet) {
        var result = '',
            count = count || 5,
            alphabetArray = alphabet.split(''),
            alphabetLength = alphabetArray.length;

        for (var c = 0; c < count; c++) {
            var index = Math.floor(Math.random() * alphabetLength);
            result += alphabetArray[index];
        }

        return result;
    };


    var encode = function(num, alphabet) {
        var div, mod, enc = '',
            alphabetLength = alphabet.length;

        if (typeof num !== 'number') {
            num = parseInt(num, 10);
        }

        div = num;

        while (num >= alphabetLength) {
            div = num / alphabetLength;
            mod = num - (alphabetLength * Math.floor(div));
            enc = alphabet.substr(mod, 1) + enc;
            num = Math.floor(div);
        }

        return div ? '' + alphabet.substr(div, 1) + enc : enc;
    };

    var decode = function(str, alphabet) {
        var result = 0,
            multi = 1;

        for (var i = str.length - 1; i >= 0; i--) {
            result = result + multi * alphabet.indexOf(str[i]);
            multi = multi * alphabet.length;
        }

        return result;
    };

    exports.set = function(alpha) {
        if (alpha && alphabetList.hasOwnProperty(alpha)) {
            alphabet = alphabetList[alpha];
        } else if (alpha && typeof alpha === 'string' && alpha.length > 10) {
            alphabet = alpha;
        }
        return this;
    };

    exports.reset = function() {
        alphabet = alphabetList.base58;
        return this;
    };

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

