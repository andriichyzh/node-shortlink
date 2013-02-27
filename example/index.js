var shortlink = require("../lib/shortlink");


setInterval(function() {
    //console.log(shortlink.generateBase52(154));
    var index = Math.floor(Math.random() * 999999999);
    console.log('----------------------');
    console.log(index);
    var res = shortlink.encodeBase58(index);
    console.log(res);
    console.log(shortlink.decodeBase58(res));

}, 2000);

//console.log(shortlink.encodeBase52(65685454989));
