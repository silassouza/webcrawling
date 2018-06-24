var fs = require('fs');

module.exports = {

    today: function () {
        var today = new Date();
        today = today.getFullYear().toString()
            + '-' + (today.getMonth() + 1).toString()
            + '-' + today.getDate().toString()
            + ' ' + today.getHours()
            + ':' + today.getMinutes()
            + ':' + today.getSeconds()
            + '.' + today.getMilliseconds()
        return today;
    },

    snapshot: function (me, selector) {
        var now = this.today()
        this.captureImage(me, now, selector);
        return this.captureDocument(me, now);
    },

    captureDocument: function (casper, now) {
        var js = casper.evaluate(function () {
            return document;
        });
        fs.write("screenshots/" + now + ".json", JSON.stringify(js), 'w');
        fs.write("screenshots/" + now + ".html", js.all[0].outerHTML, 'w');
        return js;
    },

    captureImage: function (casper, now, selector) {
        if (selector && casper.exists(selector)) {
            casper.log(selector + " found");
        } else {
            if (selector) {
                casper.log(selector + " not found");
            }
            selector = "html"
        }
        casper.captureSelector("screenshots/" + now + ".jpg", selector);
    }
}