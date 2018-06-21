module.exports = {

    today: function(){
        var today = new Date();
        today = today.getFullYear().toString()
            + '-' + (today.getMonth() + 1).toString()
            + '-' + today.getDate().toString()
            + ' ' + today.getHours()
            + ':' + today.getMinutes()
            + ':' + today.getSeconds()
            + '.' + today.getMilliseconds()
        return today;
    }

}
