var casper = require('casper').create({
    verbose: true,
    logLevel: "debug"
    // viewportSize: {
    //     width: 800,
    //     height: 600
    // }
})
var system = require('system')
var util = require('./util')

casper.userAgent('Mozilla/5.0 (Linux Android 6.0 Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.117 Mobile Safari/537.36')

casper.options.waitTimeout = 20000 

casper.start('https://www.coinexchange.io/login', function () {
    
    var password = this.ask('Password: ');
    console.log('Input:', password);

    this.on('page.error', function (msg) {
        this.echo('Error: ' + msg, 'ERROR')
    })

    this.on('remote.message', function (msg) {
        this.echo('Remote console message: ' + msg, 'MESSAGE')
    })
})

casper.then(function(){
    this.switchToFrame(0)
    this.switchToFrame(0)
    //util.snapshot(this)
})

casper.waitForSelector('div.recaptcha-checkbox-checkmark',
    function () {
        this.click('div.recaptcha-checkbox-checkmark')
    }
)

casper.then(function(){
    this.switchToMainFrame()
    this.switchToFrame(0)
    this.switchToFrame(1)
})

casper.waitForSelector('div#rc-imageselect',
    function () {
        util.snapshot(this, 'div#rc-imageselect')
    }
)

casper.run()