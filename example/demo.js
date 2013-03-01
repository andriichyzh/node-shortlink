var shortlink = require("../lib/shortlink");

setInterval(function() {

    // Generate random shortlink
    var randomStr = shortlink.generate(6);
    console.log('Generate random shortlink: ' + randomStr);

    // Decode random shortlink to int
    var randomNum = shortlink.decode(randomStr);
    console.log('Decode this shortlink to int: ' + randomNum);

    // Encode this int to shortlink
    var str = shortlink.encode(randomNum);
    console.log('Encode this int to shortlink: ' + str);

    // Decode this shortlink to int
    var num = shortlink.decode(str);
    console.log('Decode this shortlink to int: ' + num);

    console.log('--------------');

}, 2000);


