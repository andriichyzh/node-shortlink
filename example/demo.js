var shortlink = require("../lib/shortlink");

setInterval(function() {

    // Generate random
    var random = shortlink.generate(1);

    // Decode random string
    var id = shortlink.decode(random);

    // Encode to string
    var str = shortlink.encode(id);

    // Decode string
    var res = shortlink.decode(str);

    console.log('id = ' + id);
    console.log(random + ' : ' + str);
    console.log('id = ' + res);
    console.log('----------------');

}, 2000);


