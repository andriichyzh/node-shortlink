(function() {
    'use strict';

    var alphabetList = {
        base52: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
        base58: '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ'
    };


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



    exports.generate = function(count) {
        var alphabet = alphabetList.base58;
        return generate(count, alphabet);
    };


    exports.encode = function(num) {
        var alphabet = alphabetList.base58;
        return encode(num, alphabet);
    };


    exports.decode = function(str) {
        var alphabet = alphabetList.base58;
        return decode(str, alphabet);
    };


})();

