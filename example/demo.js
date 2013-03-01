var shortlink = require("../lib/shortlink");

setInterval(function() {

    // Generate random shortlink
    var random = shortlink.generate(6);
    console.log('Generate random shortlink: ' + random);

    // Decode random shortlink to int
    var id = shortlink.decode(random);
    console.log('Decode this shortlink to int: ' + id);

    // Encode this int to shortlink
    var str = shortlink.encode(id);
    console.log('Encode this int to shortlink: ' + str);

    // Decode this shortlink to int
    var res = shortlink.decode(str);
    console.log('Decode this shortlink to int: ' + res);

    console.log('--------------');

}, 2000);


