var util = require('./util')
var casper = require('casper').create();

casper.userAgent('Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.117 Mobile Safari/537.36');

casper.start('https://www.coinexchange.io/login', function() {

    
});

casper.withFrame(0, function() {

    this.click("iframe[0]");

    this.capture('screenshots/debug.jpg' , undefined, {
        format: 'jpg',
        quality: 75
    });
});


casper.run();