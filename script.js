
setInterval(function(){
    var now = moment().format('hh:mm:ss YYYY-MM-DD')
    $("#currentDay").text(now)
},1000);

