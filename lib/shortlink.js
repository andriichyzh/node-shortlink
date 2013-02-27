(function () {
    'use strict';

    var alphabetBase52 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',       // RFC 4648 alphabet
        alphabetBase58 = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz123456789'; // RFC 4648 alphabet

    // '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ'

    var generate = function(cnt, alphabet) {
        var result = '',
            count = cnt || 5,
            alphabetArray = alphabet.split(''),
            alphabetLength = alphabetArray.length;

        for (var c = 0; c < count; c++) {
            var index = Math.floor(Math.random() * alphabetLength);
            result += alphabetArray[index];
        }

        return result;
    };

    var encode = function(num, alphabet) {
        var result = '';

        if (typeof num !== 'number') {
            num = parseInt(num);
        }

        var enc='', alpha = alphabet;
        var alfaLength = alphabet.length;
        var div = num, mod;
        while (num >= alfaLength) {
            div = num / alfaLength;
            mod = num - (alfaLength * Math.floor(div));
            enc = '' + alpha.substr(mod, 1) + enc;
            num = Math.floor(div);
        }

        //if (/^\d+$/.test(num)) throw new Error('Value passed is not an integer!');


        return div ? '' + alpha.substr(div, 1) + enc : enc;
    }

    var decode = function(str, alphabet) {
        var num = str.length ;
        var decoded = 0 ;
        var multi = 1 ;
        for (var i = (num-1); i >= 0; i--) {
            decoded = decoded + multi * alphabet.indexOf(str[i]) ;
            multi = multi * alphabet.length ;
        }
        return decoded;
    }


    exports.generateBase52 = function(cnt) {
        return generate(cnt, alphabetBase52);
    };

    exports.generateBase58 = function(cnt) {
        return generate(cnt, alphabetBase58);
    };

    exports.generate = function(cnt, alphabet) {
        return generate(cnt, alphabet);
    };




    exports.encodeBase52 = function(num) {
        return encode(num, alphabetBase52);
    };

    exports.encodeBase58 = function(num) {
        return encode(num, alphabetBase58);
    };

    exports.encode = function(num, alphabet) {
        return encode(num, alphabet);
    };




    exports.decodeBase52 = function(str) {
        return decode(str, alphabetBase52);
    };

    exports.decodeBase58 = function(str) {
        return decode(str, alphabetBase58);
    };

    exports.decode = function(str, alphabet) {
        return decode(str, alphabet);
    };


})();

